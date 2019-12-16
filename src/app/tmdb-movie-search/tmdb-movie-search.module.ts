import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TmdbMovieSearchRoutingModule } from './tmdb-movie-search-routing.module';
import { TmdbMovieSearchComponent } from './tmdb-movie-search.component';


@NgModule({
  declarations: [TmdbMovieSearchComponent],
  imports: [
    CommonModule,
    TmdbMovieSearchRoutingModule
  ]
})
export class TmdbMovieSearchModule { }
