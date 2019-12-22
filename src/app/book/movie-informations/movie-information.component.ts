import { Component, Input, OnInit } from '@angular/core';
import { MovieTMDBService, RepertuarService } from '@api/shared';

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
