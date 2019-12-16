import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallsComponent } from './halls.component';



@NgModule({
  declarations: [HallsComponent],
  exports: [
    HallsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HallsModule { }
