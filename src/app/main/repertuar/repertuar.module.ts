import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepertuarComponent } from './repertuar.component';
import { CalendarModule } from './calendar/calendar.module';
import { MoviesTableModule } from './movies-table/movies-table.module';
import { SharedModule } from '@shared/shared.module';
import { CalendarService } from './_shared/services/calendar/calendar.service';
import { FilterMoviesPlayByDatePipe } from './_shared/pipes/filter-movies-play-by-date/filter-movies-play-by-date.pipe';



@NgModule({
  declarations: [
    RepertuarComponent,
    FilterMoviesPlayByDatePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    CalendarModule,
    MoviesTableModule
  ],
  providers: [
    CalendarService
  ],
  exports: [RepertuarComponent]
})
export class RepertuarModule { }
