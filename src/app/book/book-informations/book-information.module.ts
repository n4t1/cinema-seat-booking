import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookInformationComponent } from './book-information.component';
import { SharedModule } from '@api/shared';



@NgModule({
  declarations: [BookInformationComponent],
  exports: [
    BookInformationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BookInformationModule { }
