import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesTableComponent } from './movies-table.component';
import { MovieTemplateModule } from './movie-template/movie-template.module';
import { SharedModule } from '@shared/shared.module';
import { FilterMoviesPlayByDatePipe } from '@main/shared/pipes/filter-movies-play-by-date/filter-movies-play-by-date.pipe';



@NgModule({
  declarations: [
    MoviesTableComponent,
    FilterMoviesPlayByDatePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    MovieTemplateModule
  ],
  exports: [MoviesTableComponent]
})
export class MoviesTableModule { }
