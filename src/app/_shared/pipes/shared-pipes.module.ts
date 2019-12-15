import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimeFormatterPipe } from './time-formatter/timeFormatter.pipe';
import { YearFormatterPipe } from './year-formatter/yearFormatter.pipe';
import { SetMoviePlayLangPipe } from './set-movie-play-lang/setMoviePlayLang.pipe';
import { SetMoviePlayViewPipe } from './set-movie-play-view/setMoviePlayView.pipe';

const pipes = [
   TimeFormatterPipe,
   YearFormatterPipe,
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
