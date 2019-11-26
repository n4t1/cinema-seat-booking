import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

const modules = [
    MatCardModule
];

@NgModule({
  imports: [
    CommonModule,
    modules
  ],
  exports: [modules]
})
export class AngularMaterialModule { }
