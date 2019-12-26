import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomSelectTestPage } from './custom-select-test.page';

const routes: Routes = [
  {
    path: '',
    component: CustomSelectTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomSelectTestPageRoutingModule {}
