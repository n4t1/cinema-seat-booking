import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookInformationComponent } from './book-information.component';



@NgModule({
  declarations: [BookInformationComponent],
  exports: [
    BookInformationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookInformationModule { }
