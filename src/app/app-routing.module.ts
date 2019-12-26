import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'board', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'board',
    loadChildren: () => import('./pages/board/board.module').then( m => m.BoardPageModule)
  },
  {
    path: 'custom-select-test',
    loadChildren: () => import('./pages/custom-select-test/custom-select-test.module').then( m => m.CustomSelectTestPageModule)
  },
  {
    path: 'toast-test',
    loadChildren: () => import('./pages/toast-test/toast-test.module').then( m => m.ToastTestPageModule)
  },
  {
    path: 'sqlite',
    loadChildren: () => import('./database/sqlite/sqlite.module').then( m => m.SqlitePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
