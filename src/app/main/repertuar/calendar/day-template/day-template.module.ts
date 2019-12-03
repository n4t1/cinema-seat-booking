import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayTemplateComponent } from './day-template.component';



@NgModule({
  declarations: [DayTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [DayTemplateComponent]
})
export class DayTemplateModule { }
