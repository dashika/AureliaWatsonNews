import { WatsonDataProxy, WatsonData } from './WatsonData';
import { HttpClient, json } from 'aurelia-fetch-client';
import { Comment } from './Comment';
declare var firebase;



export class App {

  constructor() {
    this.title = 'Watson Search';
    this.query = '';
    this.watsonData = [];
    this.defaultImg = 'https://geneticliteracyproject.org/wp-content/uploads/2017/11/m5xbsgp3zxjvkztcxo4o.png';
    this.v = false;
    this.comments = [];

  }

  getExerciseOptions(value): Promise<Array<Comment>> {
    var ref = firebase.database().ref('/messages/' + value + '/');

    return ref
      .once("value")
      .then(snap => {

        const c: Comment[] = [];

        snap.forEach(function (item) {
          var itemVal = item.val();
          let jsonObject = itemVal as Comment;
          c.push(jsonObject);
          return false;
        });
        return c;
      });
  }

  openNav(value) {

    this.getExerciseOptions(value).then(exercises => {
      console.log(exercises);
      this.comments = exercises;
    });


    document.getElementById("mySidenav").style.width = "40%";
    var newPostKey = firebase.database().ref('comments').child('messages').push().key;
    var postData = {
      uid: value,
      body: "body",
      date: Date()
    };
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/messages/' + value + '/' + newPostKey] = postData;

    firebase.database().ref().update(updates)
  };

  closeNav() {
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

}
