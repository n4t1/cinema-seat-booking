import { IQueryMovieRest, IQueryMoviesRest } from "./query-movies.interface";

export class QueryMovieDTO implements IQueryMovieRest {
  public popularity: number;
  public vote_count: number;
  public video: boolean;
  public poster_path: string;
  public id: number;
  public adult: boolean;
  public backdrop_path: string;
  public original_language: string;
  public original_title: string;
  public genre_ids: number[];
  public title: string;
  public vote_average: number;
  public overview: string;
  public release_date: string;

  constructor() {}

  public parse(rest: string): QueryMovieDTO {
    const parse = JSON.parse(rest);

    this.popularity = parse.popularity;
    this.vote_count = parse.vote_count;
    this.video = parse.video;
    this.poster_path = parse.poster_path;
    this.id = parse.id;
    this.adult = parse.adult;
    this.backdrop_path = parse.backdrop_path;
    this.original_language = parse.original_language;
    this.original_title = parse.original_title;
    this.genre_ids = parse.genre_ids;
    this.title = parse.title;
    this.vote_average = parse.vote_average;
    this.overview = parse.overview;
    this.release_date = parse.release_date;

    return this;
  }
}

export class QueryMoviesDTO implements IQueryMoviesRest {
  public page: number;
  public results: QueryMovieDTO[];
  public total_pages: number;
  public total_results: number;

  constructor() {}

  public parse(rest: string): QueryMoviesDTO {
    const parse = JSON.parse(rest);

    this.page = parse.page;
    this.results = this.parseResultsArray(parse.results);
    this.total_results = parse.total_results;

    return this;
  }

  private parseResultsArray(array: any[]): QueryMovieDTO[] {
    return array.map((el: any) => {
      return new QueryMovieDTO().parse(el);
    });
  }
}
