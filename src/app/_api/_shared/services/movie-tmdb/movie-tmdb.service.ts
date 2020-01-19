import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IMovieDetailsRest, IQueryMoviesRest, MovieDetailsDTO, QueryMoviesDTO } from '../../models';

@Injectable()
export class MovieTMDBService {
  private readonly API_KEY = '?api_key=fe1a1a777485b3e314f16af8e051dfb4';
  private readonly PL_LANG = '&language=pl';

  constructor(private httpClient: HttpClient) {}

  public getMovieDetails(movieId: number): Observable<MovieDetailsDTO> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}${this.API_KEY}${this.PL_LANG}`;
    const errorUrl = `https://api.themoviedb.org/3/movie/${movieId}`;

    return this.httpClient.get<IMovieDetailsRest>(url).pipe(
      map(
        response => {
          const deserializedResponse = new MovieDetailsDTO().deserialize(
            response
          );
          // console.log('getMovieDetails: ', deserializedResponse);
          return deserializedResponse;
        },
        catchError(error => {
          console.log(errorUrl, error);
          return throwError(error);
        })
      )
    );
  }

  public getSearchFromQueryMovie(search: string): Observable<QueryMoviesDTO> {
    const convertSearch: string = search.replace(' ', '+');
    const query = `&query=${convertSearch}`;

    const url = `https://api.themoviedb.org/3/search/movie${this.API_KEY}${query}`;
    const errorUrl = `https://api.themoviedb.org/3/search/movie${query}`;

    return this.httpClient.get<IQueryMoviesRest>(url).pipe(
      map(
        response => {
          const deserializedResponse = new QueryMoviesDTO().deserialize(
            response
          );
          // console.log('getSearchFromQueryMovie: ', deserializedResponse);
          return deserializedResponse;
        },
        catchError(error => {
          console.log(errorUrl, error);
          return throwError(error);
        })
      )
    );
  }

  public getImagesURL(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }
}
