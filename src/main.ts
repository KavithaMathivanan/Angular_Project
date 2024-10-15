// @ts-ignore

import { bootstrapApplication } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {AnimeListComponent} from './app/anime-list/anime-list.component';
import {AnimeMovieDetailComponent} from './app/anime-movie-detail/anime-movie-detail.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: '/anime', pathMatch :'full'},
  {path: 'anime', component: AnimeListComponent},
  {path: 'anime/:detail', component: AnimeMovieDetailComponent},
  {path: '**', component: PageNotFoundComponent}

];


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
