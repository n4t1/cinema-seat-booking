import { IMoviePlayRest, IRepertuarRest } from "./repertuarREST.interface";
import { IDeserialize } from "@core/models/deserialize.interface";

export class MoviePlayDTO
  implements IDeserialize<MoviePlayDTO, IMoviePlayRest>, IMoviePlayRest {
  public id: string;
  public start_date: string;
  public end_data: string;
  public room_id: number;
  public tmdb_id: number;
  public play_times: string[];

  public deserialize(obj: IMoviePlayRest): MoviePlayDTO {
    this.id = obj.id;
    this.start_date = obj.start_date;
    this.end_data = obj.end_data;
    this.room_id = obj.room_id;
    this.tmdb_id = obj.tmdb_id;
    this.play_times = obj.play_times;
    return this;
  }
}

export class RepertuarDTO
  implements IDeserialize<RepertuarDTO, IRepertuarRest>, IRepertuarRest {
  public movies_play: MoviePlayDTO[];

  public deserialize(obj: IRepertuarRest): RepertuarDTO {
    this.movies_play = [];
    obj.movies_play.forEach(el => {
      this.movies_play.push(new MoviePlayDTO().deserialize(el));
    });
    return this;
  }
}
