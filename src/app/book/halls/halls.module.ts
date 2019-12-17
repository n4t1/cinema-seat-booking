import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallsComponent } from './halls.component';
import { HallTemplateModule } from './hall-template/hall-template.module';



@NgModule({
  declarations: [HallsComponent],
  exports: [
    HallsComponent
  ],
  imports: [
    CommonModule,
    HallTemplateModule
  ]
})
export class HallsModule { }
