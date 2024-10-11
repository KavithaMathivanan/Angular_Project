import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AnimeMovieDetailComponent} from './anime-movie-detail/anime-movie-detail.component';
import {AnimeListComponent} from './anime-list/anime-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


@NgModule({
  declarations:[],
  imports: [BrowserModule, PageNotFoundComponent, AnimeListComponent, AnimeMovieDetailComponent, AppComponent],

  providers: [],
  bootstrap: []
})
export class AppModule{}
