import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayTemplateComponent } from './day-template.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [DayTemplateComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DayTemplateComponent]
})
export class DayTemplateModule { }
