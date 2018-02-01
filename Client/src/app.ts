import { WatsonDataProxy, WatsonData } from './WatsonData';
import { HttpClient, json } from 'aurelia-fetch-client';
declare var firebase;

export class App {

  w: WatsonData;

  constructor() {
    this.title = 'Watson Search';
    this.query = '';
    this.watsonData = [];
    this.defaultImg = 'https://geneticliteracyproject.org/wp-content/uploads/2017/11/m5xbsgp3zxjvkztcxo4o.png';
    this.v = false;
  }

   openNav(value) {
    document.getElementById("mySidenav").style.width = "50%";
    firebase.database().ref('comments').set({
      watsonId: value,
      message: "msg" + value
    });
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
          if(!entry.main_image_url){
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
