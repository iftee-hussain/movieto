import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const MOVIES_FETCH_URL = 'https://swapi.dev/api/films/';
const CHARACTER_FETCH_URL = 'https://swapi.dev/api/people/';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public getByUrl(url: string): Promise<any> {
    return this.http.get(url).toPromise();
  }

  public getMovies(): Promise<any> {
    return this.http.get(MOVIES_FETCH_URL).toPromise();
  }

  public getCharacters(): Promise<any> {
    return this.http.get(CHARACTER_FETCH_URL).toPromise();
  }
}
