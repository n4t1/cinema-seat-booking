import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { SharedModule } from '@shared/shared.module';
import { MovieInformationModule } from './movie-informations/movie-information.module';
import { BookInformationModule } from './book-informations/book-information.module';
import { HallsModule } from './halls/halls.module';


@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
    MovieInformationModule,
    BookInformationModule,
    HallsModule
  ]
})
export class BookModule { }
