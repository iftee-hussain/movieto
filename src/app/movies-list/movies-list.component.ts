import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
})
export class MoviesListComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMovies()
      .then((movies) => (this.movies = movies.results))
      .catch((error) => console.error(error));
  }
}
