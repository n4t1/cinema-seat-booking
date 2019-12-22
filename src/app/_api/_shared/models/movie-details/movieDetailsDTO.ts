import {
  IGenreRest,
  IProductionCompanyRest,
  IProductionCountryRest,
  IMovieDetailsRest,
  ISpokenLanguageRest
} from './movieDetailsREST.interface';
import { IDeserialize } from '@api/core';

export class GenreDTO
  implements IDeserialize<GenreDTO, IGenreRest>, IGenreRest {
  public id: number;
  public name: string;

  public deserialize(obj: IGenreRest): GenreDTO {
    this.id = obj.id;
    this.name = obj.name;
    return this;
  }
}

export class ProductionCompanyDTO
  implements IDeserialize<ProductionCompanyDTO, IProductionCompanyRest>,
    IProductionCompanyRest {
  public id: number;
  public logo_path: string;
  public name: string;
  public origin_country: string;

  public deserialize(obj: IProductionCompanyRest): ProductionCompanyDTO {
    this.id = obj.id;
    this.logo_path = obj.logo_path;
    this.name = obj.name;
    this.origin_country = obj.origin_country;
    return this;
  }
}

export class ProductionCountryDTO
  implements IDeserialize<ProductionCountryDTO, IProductionCountryRest>,
    IProductionCountryRest {
  public iso_3166_1: string;
  public name: string;

  public deserialize(obj: IProductionCountryRest): ProductionCountryDTO {
    this.iso_3166_1 = obj.iso_3166_1;
    this.name = obj.name;
    return this;
  }
}

export class SpokenLanguageDTO
  implements IDeserialize<SpokenLanguageDTO, ISpokenLanguageRest>,
    ISpokenLanguageRest {
  public iso_639_1: string;
  public name: string;

  public deserialize(obj: ISpokenLanguageRest): SpokenLanguageDTO {
    this.iso_639_1 = obj.iso_639_1;
    this.name = obj.name;
    return this;
  }
}

export class MovieDetailsDTO
  implements IDeserialize<MovieDetailsDTO, IMovieDetailsRest>,
    IMovieDetailsRest {
  public adult: boolean;
  public backdrop_path: string;
  public belongs_to_collection?: any;
  public budget: number;
  public genres: GenreDTO[];
  public homepage?: any;
  public id: number;
  public imdb_id: string;
  public original_language: string;
  public original_title: string;
  public overview: string;
  public popularity: number;
  public poster_path: string;
  public production_companies: ProductionCompanyDTO[];
  public production_countries: ProductionCountryDTO[];
  public release_date: string;
  public revenue: number;
  public runtime: number;
  public spoken_languages: SpokenLanguageDTO[];
  public status: string;
  public tagline: string;
  public title: string;
  public video: boolean;
  public vote_average: number;
  public vote_count: number;

  public deserialize(obj: IMovieDetailsRest): MovieDetailsDTO {
    this.adult = obj.adult;
    this.backdrop_path = obj.backdrop_path;
    this.belongs_to_collection = obj.belongs_to_collection;
    this.budget = obj.budget;
    this.genres = [];
    obj.genres.forEach(el => {
      this.genres.push(new GenreDTO().deserialize(el));
    });
    this.homepage = obj.homepage;
    this.id = obj.id;
    this.imdb_id = obj.imdb_id;
    this.original_language = obj.original_language;
    this.original_title = obj.original_title;
    this.overview = obj.overview;
    this.popularity = obj.popularity;
    this.poster_path = obj.poster_path;
    this.production_companies = [];
    obj.production_companies.forEach(el => {
      this.production_companies.push(
        new ProductionCompanyDTO().deserialize(el)
      );
    });
    this.production_countries = [];
    obj.production_countries.forEach(el => {
      this.production_countries.push(
        new ProductionCountryDTO().deserialize(el)
      );
    });
    this.release_date = obj.release_date;
    this.revenue = obj.revenue;
    this.runtime = obj.runtime;
    this.spoken_languages = [];
    obj.spoken_languages.forEach(el => {
      this.spoken_languages.push(new SpokenLanguageDTO().deserialize(el));
    });
    this.status = obj.status;
    this.tagline = obj.tagline;
    this.title = obj.title;
    this.video = obj.video;
    this.vote_average = obj.vote_average;
    this.vote_count = obj.vote_count;
    return this;
  }
}
