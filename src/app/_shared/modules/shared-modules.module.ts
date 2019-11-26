import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const modules = [
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [
    CommonModule,
    modules
  ],
  exports: [modules]
})
export class SharedModulesModule { }
