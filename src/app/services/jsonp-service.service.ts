import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Jsonp, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class JsonpServiceService {

  constructor(public http: HttpClient) {
    console.log('Hello RedditData Provider');
}

getRemoteData(property){
  const reqOpts = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    params: new HttpParams()
  };
  
  // const headers = new HttpHeaders(
  //   {'Content-Type': 'application/json'},
  //   );
  var response = this.http.get('http://localhost:3001/users/1')
  console.log(response)
  return response;
  // this.jsonp.get('http://localhost:3001').subscribe(data => {
  //     console.log(data);
  // })
}

}
