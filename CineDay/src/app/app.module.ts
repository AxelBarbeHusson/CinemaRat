import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AddPostPage } from '../pages/add-post/add-post';
import { AddCommentPage } from '../pages/add-comment/add-comment';
import { Data } from "data.service.ts";
import { Posts } from "posts.service.ts";
import { Comments } from "comments.service.ts";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent,ViewPostPage,AddPostPage,AddCommentPage],
  entryComponents: [],
  imports: [BrowserModule,Observable, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [IonicApp],
    entryComponents: [
      MyApp,
      HomePage,
      ViewPostPage,
      AddPostPage,
      AddCommentPage
    ],
})
export class AppModule {}
