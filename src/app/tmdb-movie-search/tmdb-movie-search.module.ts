import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TmdbMovieSearchRoutingModule } from './tmdb-movie-search-routing.module';
import { TmdbMovieSearchComponent } from './tmdb-movie-search.component';
import { SearchModule } from './search/search.module';


@NgModule({
  declarations: [TmdbMovieSearchComponent],
  imports: [
    CommonModule,
    TmdbMovieSearchRoutingModule,
    SearchModule
  ]
})
export class TmdbMovieSearchModule { }
