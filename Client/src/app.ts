import { WatsonDataProxy, WatsonData } from './WatsonData';
import { HttpClient, json } from 'aurelia-fetch-client';
import { WatsonData } from './WatsonData.d';
import { default } from './environment';

export class App {

  w: WatsonData;

  constructor() {
    this.title = 'Watson Search';
    this.query = '';
    this.watsonData = [];
    this.defaultImg = 'https://geneticliteracyproject.org/wp-content/uploads/2017/11/m5xbsgp3zxjvkztcxo4o.png';
    this.v = false;
  }

  Find() {
    this.v = true;
    console.log('myUser');
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
            return request; // you can return a modified Request, or you can short-circuit the request by returning a Response
          },
          response(response) {
            console.log(`Received ${response.status} ${response.url}`);
            console.log(response);
            return response; // you can return a modified Response
          }
        });
    });

    let comment = { title: 'app', content: this.query };

    httpClient.fetch('watson', {
      method: 'post',
      body: json(comment)
    })
      .then(response => {
        console.log(response);
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
