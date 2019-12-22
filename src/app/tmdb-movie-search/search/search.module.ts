import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SharedModule } from '@api/shared';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
