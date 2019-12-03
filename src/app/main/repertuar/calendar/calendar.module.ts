import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { DayTemplateModule } from './day-template/day-template.module';



@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    DayTemplateModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
