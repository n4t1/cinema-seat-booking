import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallTemplateComponent } from './hall-template.component';
import { SeatsModule } from './seats/seats.module';



@NgModule({
  declarations: [HallTemplateComponent],
  exports: [
    HallTemplateComponent
  ],
  imports: [
    CommonModule,
    SeatsModule
  ]
})
export class HallTemplateModule { }
