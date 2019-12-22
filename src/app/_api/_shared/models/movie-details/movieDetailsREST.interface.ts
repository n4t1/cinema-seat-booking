export interface IGenreRest {
  id: number;
  name: string;
}

export interface IProductionCompanyRest {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IProductionCountryRest {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguageRest {
  iso_639_1: string;
  name: string;
}

export interface IMovieDetailsRest {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: IGenreRest[];
  homepage?: any;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompanyRest[];
  production_countries: IProductionCountryRest[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguageRest[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
