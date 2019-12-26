import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class JsonpServiceService {

  constructor(public http: HttpClient) {
    console.log('Hello RedditData Provider');
}

getRemoteData(){
  this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot').subscribe(data => {
      console.log(data);
  })
}

}
