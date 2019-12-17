import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ConvertAndFormatTimePipe } from './convert-and-format-time/convertAndFormatTime.pipe';
import { ConvertAndFormatDatePipe } from './convert-and-format-date/convertAndFormatDate.pipe';
import { SetMoviePlayLangPipe } from './set-movie-play-lang/setMoviePlayLang.pipe';
import { SetMoviePlayViewPipe } from './set-movie-play-view/setMoviePlayView.pipe';
import { NoDataPipe } from './no-data/no-data.pipe';

const pipes = [
  ConvertAndFormatTimePipe,
  ConvertAndFormatDatePipe,
  SetMoviePlayLangPipe,
  SetMoviePlayViewPipe,
  NoDataPipe
];

@NgModule({
  declarations: [
    pipes
  ],
  imports: [
    CommonModule
  ],
  providers: [
    pipes,
    DatePipe
  ],
  exports: [
    pipes
  ]
})
export class SharedPipesModule {
}
