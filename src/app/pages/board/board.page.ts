import { Component, OnInit } from '@angular/core';
// import {Books} from 'src/book-list'
import {Articles} from 'src/article-list'
import {Sqlite} from '../../sqlite'

import { FormBuilder, FormsModule, ReactiveFormsModule ,FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/article';
import {JsonpServiceService} from '../../services/jsonp-service.service'
@Component({
  selector: 'app-board',
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.scss'],
  providers: []
})
export class BoardPage implements OnInit {
  myForm: FormGroup;
  articles:  Article[];
  public article: any;

  constructor(
    private JsonpServiceService : JsonpServiceService,
    public sqlite :Sqlite
    , public formBuilder: FormBuilder ) { 
    this._iniitializeApp();
  }

  _iniitializeApp() {
    this. articles = this.sqlite.getAll();

    this.myForm = this.formBuilder.group({
      id:[''],
      title: [''],
      contents: ['']
    });
  }

  ngOnInit() {
  }

  getArticleAll(){
    this.JsonpServiceService.selectArticleAll().subscribe(
      data => {
          if (data != null) {
            console.log(data)
          }
          // this.getSearchDataList(this.date);
      },
      err => {
          console.log("Error")

      }
    );
  }

  getArticle() {
    var id = this.myForm.value["id"].toString().trim();

    this.JsonpServiceService.selectArticle(id).subscribe(
      data => {
          if (data != null) {
            console.log(data)
          }
          // this.getSearchDataList(this.date);
      },
      err => {
          console.log("Error")

      }
    );
  }
  addArticle() {
    
    var data = {
      title: this.myForm.value["title"].toString().trim(),
      contents: this.myForm.value["contents"].toString().trim()
    };


    console.log(data)


    this.JsonpServiceService.insertArticle(data).subscribe(
      data => {
          if (data != null) {
            console.log(data)
          }
          // this.getSearchDataList(this.date);
      },
      err => {
          console.log("Error")

      }
    );

  }

  deleteArticle(){
    var id = this.myForm.value["id"].toString().trim();

    console.log(id)
    this.JsonpServiceService.deleteArticle(id).subscribe(
      data => {
          if (data != null) {
            console.log(data)
          }
          // this.getSearchDataList(this.date);
      },
      err => {
          console.log("Error")

      }
    );
  }

  modifyArticle(){

  }

}
