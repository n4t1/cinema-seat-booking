import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieTemplateComponent } from './movie-template.component';
import { SharedModule } from '@api/shared';



@NgModule({
  declarations: [MovieTemplateComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MovieTemplateComponent]
})
export class MovieTemplateModule { }
