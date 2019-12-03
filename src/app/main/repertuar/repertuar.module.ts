import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepertuarComponent } from './repertuar.component';
import { CalendarModule } from './calendar/calendar.module';
import { MoviesTableModule } from './movies-table/movies-table.module';



@NgModule({
  declarations: [
    RepertuarComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    MoviesTableModule
  ],
  exports: [RepertuarComponent]
})
export class RepertuarModule { }
