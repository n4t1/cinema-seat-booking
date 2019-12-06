import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieTemplateComponent } from './movie-template.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [MovieTemplateComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MovieTemplateComponent]
})
export class MovieTemplateModule { }
