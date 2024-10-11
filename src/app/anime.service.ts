import { Injectable } from '@angular/core';
import {Anime} from './shared/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private animes: Anime[] = [
    {movieId: 555, title: "Inside Out", keyCharacter: "Sara", releasedYear: 2015, boxOffice:false},
    {movieId: 666, title: "Jurassic World Camp Creatures", keyCharacter: "Brooklyn", releasedYear: 2021, boxOffice: true},
    {movieId: 777, title: "Monster University", keyCharacter: "Gabby", releasedYear: 2012, boxOffice: true},
    {movieId: 888, title: "Big Hero 6", keyCharacter: "Baymax", releasedYear: 2019, boxOffice: true}]

  constructor() { }

  getAnimes(): Anime[]{
    return this.animes;
  }
}
