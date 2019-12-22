import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarService } from './calendar/calendar.service';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CalendarService]
})
export class MainSharedServicesModule { }
