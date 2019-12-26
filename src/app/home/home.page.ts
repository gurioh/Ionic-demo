import { Component } from '@angular/core';
import { Book } from 'src/book';
import {Books} from 'src/book-list'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  books: Array<any>;

  constructor() {
    this._iniitializeApp();
  }

  _iniitializeApp() {
    this.books = Books;
  }
}
