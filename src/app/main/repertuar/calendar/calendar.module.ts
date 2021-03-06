import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { DayTemplateModule } from './day-template/day-template.module';
import { SharedModule } from '@api/shared';



@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    SharedModule,
    DayTemplateModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
