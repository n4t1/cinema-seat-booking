import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepertuarComponent } from './repertuar.component';
import { CalendarModule } from './calendar/calendar.module';
import { MoviesTableModule } from './movies-table/movies-table.module';
import { SharedModule } from '@shared/shared.module';
import { CalendarService } from '@main/shared/services/calendar/calendar.service';



@NgModule({
  declarations: [
    RepertuarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CalendarModule,
    MoviesTableModule
  ],
  providers: [CalendarService],
  exports: [RepertuarComponent]
})
export class RepertuarModule { }
