import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BoardPageRoutingModule } from './board-routing.module';
import { BoardPage } from './board.page';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

@NgModule({

 imports: [

  CommonModule,

  FormsModule,

  IonicModule,

  BoardPageRoutingModule,
  ReactiveFormsModule

 ],

 declarations: [BoardPage]

})

export class BoardPageModule {}