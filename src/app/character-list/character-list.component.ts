import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Character } from '../model/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent implements OnInit {
  public characters: Character[];

  constructor(private movieService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.movieService
      .getCharacters()
      .then((characters) => (this.characters = characters.results))
      .catch((error) => console.error(error));
  }

  public ngOnClick(url: string): void {
    this.router.navigateByUrl(`character?url=${url}`);
  }
}
