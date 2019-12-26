import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import {Sqlite} from './sqlite'

import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { JsonpServiceService} from './services/jsonp-service.service'
import { Jsonp, JsonpModule} from '@angular/http';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    HttpClientModule
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    Sqlite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },JsonpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
