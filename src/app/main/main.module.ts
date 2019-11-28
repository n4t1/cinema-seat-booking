import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AngularMaterialModulesModule } from '../_shared/modules/angular-material-modules.module';
import { RepertuarComponent } from './repertuar/repertuar.component';
import { CalendarComponent } from './repertuar/calendar/calendar.component';
import { DayTemplateComponent } from './repertuar/calendar/day-template/day-template.component';
import { MoviesTableComponent } from './repertuar/movies-table/movies-table.component';
import { MovieTemplateComponent } from './repertuar/movies-table/movie-template/movie-template.component';


@NgModule({
  declarations: [
    MainComponent,
    RepertuarComponent,
    CalendarComponent,
    DayTemplateComponent,
    MoviesTableComponent,
    MovieTemplateComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularMaterialModulesModule
  ]
})
export class MainModule { }
