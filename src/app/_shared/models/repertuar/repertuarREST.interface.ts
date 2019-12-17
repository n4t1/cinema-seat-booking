export interface IMoviePlayRest {
  id: string;
  start_date: string;
  end_data: string;
  tmdb_id: number;
  rooms: number[];
  play_times: string[];
  lang: string[];
  view: string[];
}

export interface ICalendar {
  from: string;
  to: string;
}

export interface IRepertuarRest {
  locale_lang: string;
  calendar: ICalendar;
  movies_play: IMoviePlayRest[];
}
