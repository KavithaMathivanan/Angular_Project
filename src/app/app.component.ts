import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf, NgFor, NgForOf, JsonPipe} from '@angular/common';
import {Anime} from './shared/anime';
import {AnimeListComponent} from './anime-list/anime-list.component';
import {AnimeMovieDetailComponent} from './anime-movie-detail/anime-movie-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgForOf, NgIf, JsonPipe, AnimeListComponent, AnimeMovieDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReviewTest1';


}
