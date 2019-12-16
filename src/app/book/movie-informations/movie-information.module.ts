import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieInformationComponent } from './movie-information.component';
import { SharedModule } from '@shared/shared.module';



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
