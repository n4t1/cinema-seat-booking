import {
  IGenreRest,
  IProductionCompanyRest,
  IProductionCountryRest,
  IMovieDetailsRest,
  ISpokenLanguageRest
} from "./movie-details.interface";

export class GenreDTO implements IGenreRest {
  public id: number;
  public name: string;

  constructor() {}

  public parse(rest: string): GenreDTO {
    const parse = JSON.parse(rest);

    this.id = parse.id;
    this.name = parse.name;

    return this;
  }
}

export class ProductionCompanyDTO implements IProductionCompanyRest {
  public id: number;
  public logo_path: string;
  public name: string;
  public origin_country: string;

  constructor() {}

  public parse(rest: string): ProductionCompanyDTO {
    const parse = JSON.parse(rest);

    this.id = parse.id;
    this.logo_path = parse.logo_path;
    this.name = parse.name;
    this.origin_country = parse.origin_country;

    return this;
  }
}

export class ProductionCountryDTO implements IProductionCountryRest {
  public iso_3166_1: string;
  public name: string;

  constructor() {}

  public parse(rest: string): ProductionCountryDTO {
    const parse = JSON.parse(rest);

    this.iso_3166_1 = parse.iso_3166_1;
    this.name = parse.name;

    return this;
  }
}

export class SpokenLanguageDTO implements ISpokenLanguageRest {
  public iso_639_1: string;
  public name: string;

  constructor() {}

  public parse(rest: string): SpokenLanguageDTO {
    const parse = JSON.parse(rest);

    this.iso_639_1 = parse.iso_639_1;
    this.name = parse.name;

    return this;
  }
}

export class MovieDetailsDTO implements IMovieDetailsRest {
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

  constructor() {}

  public parse(rest: string): MovieDetailsDTO {
    const parse = JSON.parse(rest);

    this.adult = parse.adult;
    this.backdrop_path = parse.backdrop_path;
    this.belongs_to_collection = parse.belongs_to_collection;
    this.budget = parse.budget;
    this.genres = this.parseGenresArray(parse.name);
    this.homepage = parse.homepage;
    this.id = parse.id;
    this.imdb_id = parse.imdb_id;
    this.original_language = parse.original_language;
    this.original_title = parse.original_title;
    this.overview = parse.overview;
    this.popularity = parse.popularity;
    this.production_companies = this.parseProductionCompaniesArray(
      parse.production_companies
    );
    this.production_countries = this.parseProductionCountriesArray(
      parse.production_countries
    );
    this.release_date = parse.release_date;
    this.revenue = parse.revenue;
    this.runtime = parse.runtime;
    this.spoken_languages = this.parseSpokenLanguageArray(
      parse.spoken_languages
    );
    this.tagline = parse.tagline;
    this.title = parse.title;
    this.video = parse.video;
    this.vote_average = parse.vote_average;
    this.vote_count = parse.vote_count;

    return this;
  }

  private parseGenresArray(array: any[]): GenreDTO[] {
    return array.map((el: any) => {
      return new GenreDTO().parse(el);
    });
  }

  private parseProductionCompaniesArray(array: any[]): ProductionCompanyDTO[] {
    return array.map((el: any) => {
      return new ProductionCompanyDTO().parse(el);
    });
  }

  private parseProductionCountriesArray(array: any[]): ProductionCountryDTO[] {
    return array.map((el: any) => {
      return new ProductionCountryDTO().parse(el);
    });
  }

  private parseSpokenLanguageArray(array: any[]): SpokenLanguageDTO[] {
    return array.map((el: any) => {
      return new SpokenLanguageDTO().parse(el);
    });
  }
}
