import { Component, OnInit, Input } from '@angular/core';
import { MovieTMDBService } from '@shared/services/movie-tmdb/movie-tmdb.service';
import { RepertuarService } from '@shared/services/repertuar/repertuar.service';
import { GenreDTO, ProductionCountryDTO } from '@shared/models/movie-details/movieDetailsDTO';

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

  public playTimes: string[];
  public selectedDay: string;

  @Input()
  public set tmdbID(value: string) {
    this._tmdbID = value;

    this.setMovieDetails(this.tmdbID);
  }
  public get tmdbID(): string {
    return this._tmdbID;
  }
  private _tmdbID: string;

  @Input()
  public set id(value: number) {
    this._id = value;

    this.setMoviePlayTimes(this.id);
  }
  public get id(): number {
    return this._id;
  }
  private _id: number;

  constructor(
    private movieTMDBService: MovieTMDBService,
    private repertuarService: RepertuarService
  ) {}

  ngOnInit() {}

  private setMovieDetails(tmdbID: string) {
    this.movieTMDBService.getMovieDetails(tmdbID).subscribe(movieDetails => {
      this.posterURL = this.movieTMDBService.getImagesURL(
        movieDetails.poster_path
      );
      this.posterAlt = `Plakat ${movieDetails.title}`;
      this.genres = movieDetails.genres;
      this.runtime = movieDetails.runtime;
      this.productionCountries = movieDetails.production_countries;
      this.releaseDate = movieDetails.release_date;
    });
  }

  private setMoviePlayTimes(id: number) {
    this.repertuarService.getMoviePlayTimes(id).subscribe(playTimes => {
      this.playTimes = playTimes;
    });
  }

  private getSelectedCalendarDay() {
    // TODO: change to date from calendar
    this.selectedDay = new Date().toLocaleDateString();
  }
}
