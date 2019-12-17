import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovieTMDBService } from '@shared/services/movie-tmdb/movie-tmdb.service';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public myControl = new FormControl();
  public myControl2 = new FormControl();
  public options: IQueryMovies[] = [];

  constructor(
    private movieTMDBService: MovieTMDBService
  ) {
  }

  ngOnInit() {
    this.myControl.valueChanges.subscribe((value: string) => {
      this.movieTMDBService.getSearchFromQueryMovie(value).pipe(debounceTime(500)).subscribe(queryMovies => {
        this.options = queryMovies.results.map(result => {
          const mappedResult: IQueryMovies = {
            title: result.title,
            poster: this.movieTMDBService.getImagesURL(result.poster_path),
            release: result.release_date,
            id: result.id
          };
          return mappedResult;
        });
      });
    });
  }

  public click(id: number) {
    this.movieTMDBService.getMovieDetails(id).subscribe(value => {
      this.myControl2.setValue(JSON.stringify(value, undefined, 2));
    });
  }

}

interface IQueryMovies {
  title: string;
  poster: string;
  release: string;
  id: number;
}
