import { Component, Input, OnInit } from '@angular/core';

import { NgIf, NgFor, NgForOf, JsonPipe} from '@angular/common';
import {Anime} from '../shared/anime';
import {ActivatedRoute} from '@angular/router';
import {AnimeListComponent} from '../anime-list/anime-list.component';
import {AnimeService} from '../anime.service';


@Component({
  selector: 'app-anime-movie-detail',
  standalone: true,
  imports: [ NgFor, NgIf, NgForOf, JsonPipe],
  templateUrl: './anime-movie-detail.component.html',
  styleUrl: './anime-movie-detail.component.css'
})
export class AnimeMovieDetailComponent implements OnInit{
 anime: Anime | undefined;


  constructor(
    private routes: ActivatedRoute,
  private animeService: AnimeService
  ) {

  }

  ngOnInit() :void{
    const id = this.routes.snapshot.paramMap.get('id');
    // @ts-ignore
    this.anime = this.animeService.getAnimes().find(a => a.movieId === id);
  }
}
