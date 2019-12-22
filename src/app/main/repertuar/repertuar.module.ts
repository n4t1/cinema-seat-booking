import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepertuarComponent } from './repertuar.component';
import { CalendarModule } from './calendar/calendar.module';
import { MoviesTableModule } from './movies-table/movies-table.module';
import { SharedModule } from '@api/shared';



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
  exports: [RepertuarComponent]
})
export class RepertuarModule { }
