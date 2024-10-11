import {Component, Input} from '@angular/core';
import {NgFor, NgForOf, NgIf} from '@angular/common';
import {Anime} from '../shared/anime';

import {AnimeMovieDetailComponent} from '../anime-movie-detail/anime-movie-detail.component';
import {AnimeService} from '../anime.service';

@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [
    AnimeMovieDetailComponent, NgIf, NgForOf, NgFor
  ],
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css'
})
export class AnimeListComponent {
  animes: Anime[] = [];
  constructor(private animeService: AnimeService) {
  }
ngOnInit(): void{
    this.animes = this.animeService.getAnimes();
}

}
