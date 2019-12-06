export interface IMoviePlayRest {
  id: string;
  start_date: string;
  end_data: string;
  room_id: number;
  tmdb_id: number;
  play_times: string[];
}

export interface IRepertuarRest {
  movies_play: IMoviePlayRest[];
}