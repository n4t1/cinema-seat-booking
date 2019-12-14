import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const modules = [
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

@NgModule({
  imports: [
    CommonModule,
    modules
  ],
  exports: [modules]
})
export class SharedModulesModule { }
