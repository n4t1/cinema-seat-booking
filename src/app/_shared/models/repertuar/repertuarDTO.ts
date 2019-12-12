import { IMoviePlayRest, IRepertuarRest } from './repertuarREST.interface';
import { IDeserialize } from '@core/models/deserialize.interface';

export enum MoviePlayLangEnum {
  DUBBING = 'DUBBING',
  SUBTITLES = 'SUBTITLES',
  LOCAL = 'LOCAL'
}

export enum MoviePlayViewEnum {
  THREE_D = 'THREE_D',
  TWO_D = 'TWO_D'
}

export class MoviePlayDTO implements IDeserialize<MoviePlayDTO, IMoviePlayRest>, IMoviePlayRest {
  public id: string;
  public start_date: string;
  public end_data: string;
  public room_id: number;
  public tmdb_id: number;
  public play_times: string[];
  public lang: MoviePlayLangEnum[];
  public view: MoviePlayViewEnum[];

  public deserialize(obj: IMoviePlayRest): MoviePlayDTO {
    this.id = obj.id;
    this.start_date = obj.start_date;
    this.end_data = obj.end_data;
    this.room_id = obj.room_id;
    this.tmdb_id = obj.tmdb_id;
    this.play_times = obj.play_times;
    this.lang = obj.lang.map(lang => {
      switch (lang) {
        case MoviePlayLangEnum.DUBBING:
          return MoviePlayLangEnum.DUBBING;
        case MoviePlayLangEnum.SUBTITLES:
          return MoviePlayLangEnum.SUBTITLES;
        case MoviePlayLangEnum.LOCAL:
          return MoviePlayLangEnum.LOCAL;
        default:
        return null;
      }
    });
    this.view = obj.view.map(lang => {
      switch (lang) {
        case MoviePlayViewEnum.THREE_D:
          return MoviePlayViewEnum.THREE_D;
        case MoviePlayViewEnum.TWO_D:
          return MoviePlayViewEnum.TWO_D;
        default:
        return null;
      }
    });
    return this;
  }
}

export class RepertuarDTO implements IDeserialize<RepertuarDTO, IRepertuarRest>, IRepertuarRest {
  public movies_play: MoviePlayDTO[];
  public locale_lang: string;

  public deserialize(obj: IRepertuarRest): RepertuarDTO {
    this.locale_lang = obj.locale_lang;
    this.movies_play = [];
    obj.movies_play.forEach(el => {
      this.movies_play.push(new MoviePlayDTO().deserialize(el));
    });
    return this;
  }
}
