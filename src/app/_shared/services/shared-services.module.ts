import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepertuarService } from './repertuar/repertuar.service';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [RepertuarService]
})
export class SharedServicesModule { }
