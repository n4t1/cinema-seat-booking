import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
   exports: [
      pipes
   ]
})
export class SharedPipesModule { }
