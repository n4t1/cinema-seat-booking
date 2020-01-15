import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { MovieInformationModule } from './movie-informations/movie-information.module';
import { BookInformationModule } from './book-informations/book-information.module';
import { HallsModule } from './halls/halls.module';
import { CinemaNameModule, SharedModule } from '@api/shared';
import { BookSharedServicesModule } from '@book/shared';


@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
    MovieInformationModule,
    BookInformationModule,
    HallsModule,
    BookSharedServicesModule,
    CinemaNameModule
  ]
})
export class BookModule { }
