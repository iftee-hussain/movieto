import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character, Movie } from '../model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent implements OnInit {
  public movie: Movie;
  public characters: Character[];
  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const movieUrl = params.url;
      if (movieUrl) {
        this.moviesService.getByUrl(movieUrl).then((movie) => {
          this.movie = movie;
          this.updateCasts();
        });
      }
    });
  }

  public ngClick(character: Character): void {
    this.router.navigateByUrl(`character?url=${character.url}`);
  }

  private updateCasts(): void {
    const characterPromises: Promise<Character>[] = [];
    this.movie.characters.forEach((characterUrl) => {
      characterPromises.push(this.moviesService.getByUrl(characterUrl));
    });
    Promise.all(characterPromises).then(
      (characters) => (this.characters = characters)
    );
  }
}
