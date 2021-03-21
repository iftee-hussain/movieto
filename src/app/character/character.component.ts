import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character, Movie } from '../model/movie';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent implements OnInit {
  public character: Character;
  public movies: Movie[];
  constructor(
    private movieService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const characterUrl = params.url;
      if (characterUrl) {
        this.movieService.getByUrl(characterUrl).then((character) => {
          this.character = character;
          const filmsPromises: Promise<Movie>[] = this.character.films.map(
            (film) => this.movieService.getByUrl(film)
          );
          Promise.all(filmsPromises).then((movies) => (this.movies = movies));
        });
      }
    });
  }

  public ngOnClick(movieUrl: string): void {
    this.router.navigateByUrl(`movie?url=${movieUrl}`);
  }
}
