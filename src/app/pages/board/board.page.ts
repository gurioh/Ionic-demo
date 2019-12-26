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
      id: [''],
      contents: ['']
    });
  }

  ngOnInit() {
  }

  ionViewDidLoad(){

    var data = [];
    this.JsonpServiceService.getRemoteData(data).subscribe(
      data => {


          if (data != null) {
            console.log(data)
          }

          // this.getSearchDataList(this.date);
      },
      err => {
          //�̹� ������ ��� �������� �޼����� ���´�

          console.log("Error")

      }
  );
  }

  getArticle() {
    var id = this.myForm.value["id"].toString().trim();
    this.sqlite.get(id);
  }
  addArticle() {
    var id = this.articles.length.toString;
    var contents = this.myForm.value["contents"].toString().trim();
    this.sqlite.set(id,contents);
    // var actionSheet = this.actionSheetCtrl.create({
    //     title: param.TITLE,
    //     buttons: [
    //         {
    //             text: '공연 예약하기',
    //             handler: () => {
    //                 this.showlist(param);
    //             }
    //         },
    //         {
    //             text: '공연정보 보기',
    //             handler: () => {


                    
    //                 this.parameter = param;

    //                 console.log(this.parameter);
    //                 this.showInfo(param);
    //                 // this.takePicture(this.camera.PictureSourceType.CAMERA);
    //             }
    //         },
    //         {
    //             text: '닫기',
    //             role: 'cancel'
    //         }
    //     ]
    // });
    // actionSheet.present();

  }
 
}
