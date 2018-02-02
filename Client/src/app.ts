import { WatsonDataProxy, WatsonData } from './WatsonData';
import { HttpClient, json } from 'aurelia-fetch-client';
import { Comment } from './Comment';
declare var firebase;
import * as moment from 'moment';
import { Comment } from '.';

export class App {

  constructor() {
    this.title = 'Watson Search';
    this.query = '';
    this.newComment = '';
    this.watsonData = [];
    this.defaultImg = 'https://geneticliteracyproject.org/wp-content/uploads/2017/11/m5xbsgp3zxjvkztcxo4o.png';
    this.v = false;
    this.comments = [];
    this.active = null;
  }

  getExerciseOptions(value, comment): Promise<Array<Comment>> {
    const c: Comment[] = [];
    comment = [];
    var ref = firebase.database().ref('/messages/' + value + '/');
    
    return ref
      .once("value")
      .then(snap => {
        snap.forEach(function (item) {
          var itemVal = item.val();
          let jsonObject = itemVal as Comment;
          jsonObject.key = item.key;
          jsonObject.date = moment(jsonObject.date).fromNow();
          c.push(jsonObject);
          return false;
        });
        ref.limitToLast(1).on("child_added", function (snapshot, prevChildKey) {
          var newPost = snapshot.val();
          newPost.Key = snapshot.key;
          newPost.date = moment(newPost.date).fromNow();
          if(c.length == 0 || c[0].body != newPost.body){
            //comment.unshift(newPost as Comment);
            c.unshift(newPost as Comment);
          }
          return c;
        });
        return c.reverse();
      });
  }

  openNav(value) {
    this.active = value;
    this.getExerciseOptions(value, this.comments).then(exercises => {
      console.log(exercises);
      this.comments = exercises;
    });
    document.getElementById("mySidenav").style.width = "40%";
  };

  closeNav() {
    this.active = null;
    document.getElementById("mySidenav").style.width = "0";
  };

  Find() {
    this.v = true;
    let httpClient = new HttpClient();
    httpClient.configure(config => {
      config
        .withBaseUrl('api/')
        .withDefaults({
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch'
          }
        })
        .withInterceptor({
          request(request) {
            console.log(`Requesting ${request.method} ${request.url}`);
            return request;
          },
          response(response) {
            console.log(`Received ${response.status} ${response.url}`);
            console.log(response);
            return response;
          }
        });
    });
    let comment = { title: 'app', content: this.query };
    httpClient.fetch('watson', {
      method: 'post',
      body: json(comment)
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.watsonData = [];
        let jsonObject = data as WatsonDataProxy;
        for (let entry of jsonObject.results) {
          if (!entry.main_image_url) {
            entry.main_image_url = this.defaultImg;
          }
          this.watsonData.push(entry);
        }
        this.v = false;
        console.log(this.watsonData);
        return data;
      })
      .catch(error => {
        console.log('Error retrieving query.');
        return [];
      });
  };

  SendComment() {
    var newPostKey = firebase.database().ref('comments').child('messages').push().key;
    var postData = {
      uid: this.active,
      body: this.newComment,
      date: Date()
    };
    var updates = {};
    updates['/messages/' + this.active + '/' + newPostKey] = postData;
    firebase.database().ref().update(updates);
   
    this.newComment = '';
  }

}
