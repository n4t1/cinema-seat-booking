import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimeFormaterPipe } from './time-formater/timeFormater.pipe';

const pipes = [
  TimeFormaterPipe
];

@NgModule({
   declarations: [
      pipes
   ],
   imports: [
      CommonModule
   ],
   providers: [DatePipe],
   exports: [
      pipes
   ]
})
export class SharedPipesModule { }
