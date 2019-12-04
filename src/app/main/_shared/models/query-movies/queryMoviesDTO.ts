import {
  IQueryMovieRest as IQueryMovieDetailsRest,
  IQueryMoviesRest
} from "./queryMoviesREST.interface";
import { IDeserialize } from "@core/models/deserialize.interface";

export class QueryMovieDetailsDTO
  implements
    IDeserialize<QueryMovieDetailsDTO, IQueryMovieDetailsRest>,
    IQueryMovieDetailsRest {
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

  public deserialize(obj: IQueryMovieDetailsRest): QueryMovieDetailsDTO {
    this.popularity = obj.popularity;
    this.vote_count = obj.vote_count;
    this.video = obj.video;
    this.poster_path = obj.poster_path;
    this.id = obj.id;
    this.adult = obj.adult;
    this.backdrop_path = obj.backdrop_path;
    this.original_language = obj.original_language;
    this.original_title = obj.original_title;
    this.genre_ids = obj.genre_ids;
    this.title = obj.title;
    this.vote_average = obj.vote_average;
    this.overview = obj.overview;
    this.release_date = obj.release_date;
    return this;
  }
}

export class QueryMoviesDTO
  implements IDeserialize<QueryMoviesDTO, IQueryMoviesRest>, IQueryMoviesRest {
  public page: number;
  public results: QueryMovieDetailsDTO[];
  public total_pages: number;
  public total_results: number;

  public deserialize(obj: IQueryMoviesRest): QueryMoviesDTO {
    this.page = obj.page;
    this.results = [];
    obj.results.forEach(el => {
      this.results.push(new QueryMovieDetailsDTO().deserialize(el));
    });
    this.total_results = obj.total_results;
    return this;
  }
}
