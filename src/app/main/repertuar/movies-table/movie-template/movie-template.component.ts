import { Component, OnInit, Input } from '@angular/core';
import { MovieTMDBService } from '@shared/services/movie-tmdb/movie-tmdb.service';
import { RepertuarService } from '@shared/services/repertuar/repertuar.service';
import { GenreDTO, ProductionCountryDTO } from '@shared/models/movie-details/movieDetailsDTO';
import { MoviePlayLangEnum, MoviePlayViewEnum, PlayedDTO } from '@shared/models/repertuar/repertuarDTO';
import { ConvertAndFormatTimePipe } from '@shared/pipes/convert-and-format-time/convertAndFormatTime.pipe';
import { Subscription } from 'rxjs';
import { CalendarService } from '@main/shared/services/calendar/calendar.service';

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
    private convertAndFormatTimePipe: ConvertAndFormatTimePipe,
    private calendarService: CalendarService
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
      this.posterURL = this.movieTMDBService.getImagesURL(movieDetails.poster_path);
      this.posterAlt = `Poster ${movieDetails.title}`;
      this.genres = movieDetails.genres;
      this.runtime = movieDetails.runtime;
      this.productionCountries = movieDetails.production_countries;
      this.releaseDate = movieDetails.release_date;
      this.title = movieDetails.title;
      this.originalLanguage = movieDetails.original_language;
    });
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
