import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TmdbMovieSearchComponent } from './tmdb-movie-search.component';


const routes: Routes = [{path: '', component: TmdbMovieSearchComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TmdbMovieSearchRoutingModule { }
