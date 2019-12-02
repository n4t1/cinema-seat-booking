import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { QueryMoviesDTO } from "../models/query-movies/queryMoviesDTO";
import { MovieDetailsDTO } from "../models/movie-details/movieDetailsDTO";
import { IQueryMoviesRest } from "../models/query-movies/queryMoviesREST.interface";
import { IMovieDetailsRest } from "../models/movie-details/movieDetailsREST.interface";
@Injectable()
export class MovieDbService {
  private readonly API_KEY = "?api_key=fe1a1a777485b3e314f16af8e051dfb4";

  constructor(private httpClient: HttpClient) {}

  public getMovieDetails(movie_id: string): Observable<MovieDetailsDTO> {
    const url: string = `https://api.themoviedb.org/3/movie/${movie_id}${this.API_KEY}`;
    const errorUrl: string = `https://api.themoviedb.org/3/movie/${movie_id}`;

    return this.httpClient.get<IMovieDetailsRest>(url).pipe(
      catchError(error => {
        console.log(errorUrl, error);
        return throwError(error);
      }),
      map(response => {
        const movieDetails = new MovieDetailsDTO().deserialize(response);
        console.log("getMovieDetails: ", movieDetails);
        return movieDetails;
      })
    );
  }

  public getSearchFromQueryMovie(search: string): Observable<QueryMoviesDTO> {
    const convertSearch: string = search.replace(" ", "+");
    const query: string = `&query=${convertSearch}`;
    const url: string = `https://api.themoviedb.org/3/search/movie${this.API_KEY}${query}`;
    const errorUrl: string = `https://api.themoviedb.org/3/search/movie${query}`;

    return this.httpClient.get<IQueryMoviesRest>(url).pipe(
      catchError(error => {
        console.log(errorUrl, error);
        return throwError(error);
      }),
      map(response => {
        const queryMovies = new QueryMoviesDTO().deserialize(response);
        console.log("getSearchFromQueryMovie: ", queryMovies);
        return queryMovies;
      })
    );
  }
}
