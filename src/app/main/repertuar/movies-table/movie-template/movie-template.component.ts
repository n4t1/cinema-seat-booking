import { Component, OnInit, Input } from '@angular/core';
import { MovieTMDBService } from '@main/shared/services/movie-tmdb/movie-tmdb.service';

@Component({
  selector: 'app-movie-template',
  templateUrl: './movie-template.component.html',
  styleUrls: ['./movie-template.component.scss']
})
export class MovieTemplateComponent implements OnInit {

  public posterURL: string;

  @Input()
  public set tmdbID(value: string) {
    this._tmdbID = value;

    this.setMoviePosterURL(this.tmdbID);
  }
  public get tmdbID(): string {
    return this._tmdbID;
  }
  private _tmdbID: string;

  @Input() public playTimes: string[];

  constructor(
    private movieTMDBService: MovieTMDBService
  ) { }

  ngOnInit() {
  }

  public setMoviePosterURL(tmdbID: string) {
    this.movieTMDBService.getMovieDetails(tmdbID).subscribe((rest) => {
      this.posterURL = this.movieTMDBService.getImagesURL(rest.backdrop_path);
    });
  }

}
