import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { HttpClientModule} from "@angular/common/http";
import {PostService} from "./services/post.service";
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import {GithubFollowersService} from "./services/github-followers.service";

@NgModule({
  declarations: [
    AppComponent,
    PostComponentComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
