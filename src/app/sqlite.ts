import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Article } from 'src/article';
import { Articles } from 'src/article-list';


@Injectable()
export class Sqlite {
  [x: string]: any;

  constructor(private storage: Storage) { }
  
  public set(key: any,value: any){
    return this.storage.set(key,value);
  }
  public async get(key: any){
    this.storage.get(key).then((val) => {
      console.log(val);
    });
    return await this.storage.get(key);
  }

  public getAll(): Article[]{
   var articles : Article[]
    var data: any = []
    this.storage.forEach((key, value) => {
      data.push({
        id: key,
        value: value
      });
      articles.push(data)
    });
    return articles;
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
