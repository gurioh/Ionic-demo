import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Jsonp, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class JsonpServiceService {

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public http: HttpClient) {
    console.log('Hello RedditData Provider');
  }

  getRemoteData(property){
 
  var response = this.http.get('http://localhost:3001/users').map(data => {
        data
    })
    return response;
  }

  insertArticle(property){

    var response = this.http.post('http://localhost:3001/users',JSON.stringify(property), this.httpOptions)
    return response;
  }

  selectArticleAll(){
    var response = this.http.get('http://localhost:3001/users')
    return response;
  }

  selectArticle(id : any){
 
    var response = this.http.get('http://localhost:3001/users'+'/'+id)
    return response;
  }

  modifyArticle(id: any, property){
 
    var response = this.http.post('http://localhost:3001/users'+'/'+id, JSON.stringify(property), this.httpOptions);
    return response;
  }

  deleteArticle(id: any){
 
    var response = this.http.delete('http://localhost:3001/users'+'/'+id).map(data => {
          data
      })
      return response;
  }

}
