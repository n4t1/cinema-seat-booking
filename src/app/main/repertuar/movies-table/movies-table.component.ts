import { Component, OnInit } from '@angular/core';
import { MoviePlayDTO, RepertuarService } from '@api/shared';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})
export class MoviesTableComponent implements OnInit {

  public movies: MoviePlayDTO[];

  constructor(
    private repertuarService: RepertuarService
  ) {
  }

  ngOnInit() {
    this.initMovies();
  }

  private initMovies() {
    this.repertuarService.allMovies.subscribe(movies => {
      this.movies = movies;
    });
  }
}
