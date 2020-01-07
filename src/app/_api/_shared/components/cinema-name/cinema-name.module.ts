import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaNameComponent } from './cinema-name.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CinemaNameComponent],
  exports: [CinemaNameComponent]
})
export class CinemaNameModule { }
