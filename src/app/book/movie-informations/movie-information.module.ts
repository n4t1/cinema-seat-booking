import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieInformationComponent } from './movie-information.component';
import { SharedModule } from '@api/shared';



@NgModule({
  declarations: [MovieInformationComponent],
  exports: [
    MovieInformationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],

})
export class MovieInformationModule { }
