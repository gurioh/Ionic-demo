import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlitePageRoutingModule } from './sqlite-routing.module';

import { SqlitePage } from './sqlite.page';

import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlitePageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [SqlitePage]
})
export class SqlitePageModule {}
