import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastTestPageRoutingModule } from './toast-test-routing.module';

import { ToastTestPage } from './toast-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastTestPageRoutingModule,
  ],
  declarations: [ToastTestPage]
})
export class ToastTestPageModule {}
