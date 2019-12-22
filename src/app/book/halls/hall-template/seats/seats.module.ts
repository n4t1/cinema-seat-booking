import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsComponent } from './seats.component';
import { SharedModule } from '@api/shared';



@NgModule({
  declarations: [SeatsComponent],
  exports: [
    SeatsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SeatsModule { }
