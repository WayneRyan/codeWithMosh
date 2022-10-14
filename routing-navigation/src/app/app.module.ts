import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostComponent } from './post/post.component';
import {PostService} from "./services/post.service";
import {GithubFollowersService} from "./services/github-followers.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'followers', component: GithubFollowersComponent},
      {path: 'profile/:username', component: GithubProfileComponent},
      {path: 'posts', component: PostComponent},
      {path: '**', component: NotFoundComponent}
    ]
    )
  ],
  providers: [
    PostService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
