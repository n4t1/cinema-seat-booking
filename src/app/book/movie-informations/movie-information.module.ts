import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieInformationComponent } from './movie-information.component';



@NgModule({
  declarations: [MovieInformationComponent],
  exports: [
    MovieInformationComponent
  ],
  imports: [
    CommonModule
  ],

})
export class MovieInformationModule { }
