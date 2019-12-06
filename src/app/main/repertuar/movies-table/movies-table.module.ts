import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesTableComponent } from './movies-table.component';
import { MovieTemplateModule } from './movie-template/movie-template.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [MoviesTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    MovieTemplateModule
  ],
  exports: [MoviesTableComponent]
})
export class MoviesTableModule { }
