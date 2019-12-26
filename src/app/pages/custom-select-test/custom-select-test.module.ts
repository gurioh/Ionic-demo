import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomSelectTestPageRoutingModule } from './custom-select-test-routing.module';

import { CustomSelectTestPage } from './custom-select-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomSelectTestPageRoutingModule
  ],
  declarations: [CustomSelectTestPage]
})
export class CustomSelectTestPageModule {}
