import { Component, Input, OnInit } from '@angular/core';
import { RepertuarService } from '@shared/services/repertuar/repertuar.service';
import { MovieTMDBService } from '@shared/services/movie-tmdb/movie-tmdb.service';

@Component({
  selector: 'app-movie-information',
  templateUrl: './movie-information.component.html',
  styleUrls: ['./movie-information.component.scss']
})
export class MovieInformationComponent implements OnInit {
  @Input() public selectedTime: Date;
  @Input() private moviePlayId: number;

  public title: string;

  constructor(
    private repertuarService: RepertuarService,
    private movieTMDBService: MovieTMDBService
  ) { }

  ngOnInit() {
    this.getRepertuarMovie();
  }

  private getRepertuarMovie() {
    this.repertuarService.getMovie(this.moviePlayId).subscribe(movie => {
      this.getMovieDetails(movie.tmdb_id);
    });
  }

  private getMovieDetails(tmdbID: number) {
    this.movieTMDBService.getMovieDetails(tmdbID).subscribe(movieDetails => {
      this.title = movieDetails.title;
    });
  }

}
