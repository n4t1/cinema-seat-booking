import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimeFormaterPipe } from './time-formater/timeFormater.pipe';
import { DateFormaterPipe } from './date-formater/dateFormater.pipe';
import { SetMoviePlayLangPipe } from './set-movie-play-lang/setMoviePlayLang.pipe';
import { SetMoviePlayViewPipe } from './set-movie-play-view/setMoviePlayView.pipe';

const pipes = [
   TimeFormaterPipe,
   DateFormaterPipe,
   SetMoviePlayLangPipe,
   SetMoviePlayViewPipe
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
