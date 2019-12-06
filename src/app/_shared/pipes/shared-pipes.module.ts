import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimeFormaterPipe } from './time-formater/timeFormater.pipe';
import { DateFormaterPipe } from './date-formater/dateFormater.pipe';

const pipes = [
   TimeFormaterPipe,
   DateFormaterPipe
];

@NgModule({
   declarations: [
      pipes
   ],
   imports: [
      CommonModule
   ],
   providers: [
      DatePipe
   ],
   exports: [
      pipes
   ]
})
export class SharedPipesModule { }
