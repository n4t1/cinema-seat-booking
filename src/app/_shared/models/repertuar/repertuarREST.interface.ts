export interface IMoviePlayRest {
  id: string;
  start_date: string;
  end_data: string;
  room_id: number;
  tmdb_id: number;
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
