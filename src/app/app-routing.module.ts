import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import {MovieComponent} from './movie/movie.component';
import {CharacterComponent} from './character/character.component';
import {CharacterListComponent} from './character-list/character-list.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'characters', component: CharacterListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
