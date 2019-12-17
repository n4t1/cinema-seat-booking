import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsComponent } from './seats.component';
import { SharedModule } from '@shared/shared.module';



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
