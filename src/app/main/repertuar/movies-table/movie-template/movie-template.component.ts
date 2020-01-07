import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  ConvertAndFormatTimePipe,
  GenreDTO, MoviePlayLangEnum,
  MoviePlayViewEnum,
  MovieTMDBService,
  PlayedDTO,
  ProductionCountryDTO,
  RepertuarService,
  SetMoviePlayLangPipe,
  SetMoviePlayViewPipe
} from '@api/shared';
import { CalendarService } from '@main/shared';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-template',
  templateUrl: './movie-template.component.html',
  styleUrls: ['./movie-template.component.scss']
})
export class MovieTemplateComponent implements OnInit {
  public posterURL: string;
  public posterAlt: string;
  public genres: GenreDTO[];
  public runtime: number; // show in minutes
  public productionCountries: ProductionCountryDTO[];
  public releaseDate: string;
  public title: string;
  public originalLanguage: string;

  public played: PlayedDTO[];
  public selectedDay: string;

  @Input()
  public set tmdbID(value: number) {
    this._tmdbID = value;

    this.setMovieDetails();
  }

  public get tmdbID(): number {
    return this._tmdbID;
  }

  private _tmdbID: number;

  @Input()
  public set id(value: number) {
    this._id = value;

    this.setMoviePlayed();
  }

  public get id(): number {
    return this._id;
  }

  private _id: number;

  private sub: Subscription = new Subscription();

  constructor(
    private movieTMDBService: MovieTMDBService,
    private repertuarService: RepertuarService,
    private calendarService: CalendarService,
    private convertAndFormatTimePipe: ConvertAndFormatTimePipe,
    private setMoviePlayViewPipe: SetMoviePlayViewPipe,
    private setMoviePlayLangPipe: SetMoviePlayLangPipe,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit() {
    this.getSelectedCalendarDay();
  }

  public bookRouterLink(playTimeId: number, time: string): any[] {
    return ['/book', this.id, playTimeId, this.convertAndFormatTimePipe.transform(time, this.selectedDay).valueOf()];
  }

  private setMovieDetails() {
    this.movieTMDBService.getMovieDetails(this.tmdbID).subscribe(movieDetails => {
      this.title = movieDetails.title;
      this.genres = movieDetails.genres;
      this.runtime = movieDetails.runtime;
      this.productionCountries = movieDetails.production_countries;
      this.releaseDate = movieDetails.release_date;
      this.originalLanguage = movieDetails.original_language;

      this.setPosterAlt();
      this.posterURL = this.movieTMDBService.getImagesURL(movieDetails.poster_path);
    });
  }

  private setPosterAlt() {
    let alt = `${this.title}`;
    alt += `, gatunek: `;
    this.genres.forEach((el: GenreDTO, i: number) => {
      alt += `${el.name}`;
      if (i !== this.genres.length - 1) {
        alt += `, `;
      }
    });
    alt += `, czas trwania: ${this.runtime} min`;
    alt += `, kiedy gramy: ${this.getDate(this.selectedDay)} `;
    this.played.forEach((el: PlayedDTO, i: number) => {
      alt += `${this.getTime(el.time)} ${this.getView(el.view)}, ${this.getLang(el.lang)}`;
      if (i !== this.played.length - 1) {
        alt += `, lub `;
      }
    });
    this.posterAlt = alt;
  }

  private getDate(val: string): string {
    return this.datePipe.transform(val, 'EEE d MMM');
  }

  private getTime(val: string): string {
    return this.convertAndFormatTimePipe.transform(val, this.selectedDay, 'HH:mm') + '';
  }

  private getView(time: MoviePlayViewEnum): string {
    return this.setMoviePlayViewPipe.transform(time);
  }

  private getLang(time: MoviePlayLangEnum): string {
    let lang: string;
    this.setMoviePlayLangPipe.transform(time).subscribe(val => lang = val);
    return lang;
  }

  private setMoviePlayed() {
    this.repertuarService.getMoviePlayed(this.id).subscribe(played => {
      this.played = played;
    });
  }

  private getSelectedCalendarDay() {
    this.sub.add(this.calendarService.getSelectedDate.subscribe(date => {
      this.selectedDay = date.toJSON().split('T')[0];
    }));
  }
}
