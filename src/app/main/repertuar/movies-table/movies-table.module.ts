import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesTableComponent } from './movies-table.component';
import { MovieTemplateModule } from './movie-template/movie-template.module';
import { SharedModule } from '@api/shared';
import { FilterMoviesPlayByDatePipe } from '@main/shared';



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
