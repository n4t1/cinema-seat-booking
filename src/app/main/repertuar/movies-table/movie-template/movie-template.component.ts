import { Component, OnInit, Input } from '@angular/core';
import { MovieTMDBService } from '@shared/services/movie-tmdb/movie-tmdb.service';
import { RepertuarService } from '@shared/services/repertuar/repertuar.service';

@Component({
  selector: 'app-movie-template',
  templateUrl: './movie-template.component.html',
  styleUrls: ['./movie-template.component.scss']
})
export class MovieTemplateComponent implements OnInit {

  public posterURL: string;
  public playTimes: string[];

  @Input()
  public set tmdbID(value: string) {
    this._tmdbID = value;

    this.setMoviePosterURL(this.tmdbID);
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
  ) { }

  ngOnInit() {
  }

  private setMoviePosterURL(tmdbID: string) {
    this.movieTMDBService.getMovieDetails(tmdbID).subscribe((movieDetails) => {
      this.posterURL = this.movieTMDBService.getImagesURL(movieDetails.backdrop_path);
    });
  }

  private setMoviePlayTimes(id: number) {
    this.repertuarService.getMoviePlayTimes(id).subscribe(playTimes => {
      this.playTimes = playTimes;
    });
  }

}
