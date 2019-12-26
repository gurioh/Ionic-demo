import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sqlite',
  templateUrl: './sqlite.page.html',
  styleUrls: ['./sqlite.page.scss'],
})
export class SqlitePage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
    // set a key/value
  }

  
  public set(key: any,value: any){
    return this.storage.set(key,value);
  }
  public async get(key: any){
    this.storage.get(key).then((val) => {
      console.log(val);
    });
    return await this.storage.get(key);
  }
  public async remove(key: any){
    return await this.storage.remove(key).then((val) => {
      console.log(val);
    });
  }
  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }

  
}
