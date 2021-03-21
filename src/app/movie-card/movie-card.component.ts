import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent implements OnInit {
  @Input()
  public movie: Movie;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public ngClick(): void {
    this.router.navigateByUrl(`movie?url=${encodeURI(this.movie.url)}`);
  }
}
