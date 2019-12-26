import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastTestPage } from './toast-test.page';

const routes: Routes = [
  {
    path: '',
    component: ToastTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastTestPageRoutingModule {}
