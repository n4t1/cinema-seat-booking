import { Component, OnInit } from '@angular/core';
import { RepertuarService } from '@shared/services/repertuar/repertuar.service';
import { MoviePlayDTO } from '@shared/models/repertuar/repertuarDTO';

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
    this.movies = this.repertuarService.allMovies;
  }

  ngOnInit() {
  }

}
