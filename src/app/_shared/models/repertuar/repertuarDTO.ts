import { ICalendar, IMoviePlayRest, IPlayed, IRepertuarRest } from './repertuarREST.interface';
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

export class PlayedDTO implements IDeserialize<PlayedDTO, IPlayed>, IPlayed {
  public room: number;
  public time: string;
  public lang: MoviePlayLangEnum;
  public view: MoviePlayViewEnum;

  public deserialize(obj: IPlayed): PlayedDTO {
    this.room = obj.room;
    this.time = obj.time;
    this.lang = this.setLang(obj.lang);
    this.view = this.setView(obj.view);
    return this;
  }

  private setView(view: string): MoviePlayViewEnum {
    switch (view) {
      case MoviePlayViewEnum.THREE_D:
        return MoviePlayViewEnum.THREE_D;
      case MoviePlayViewEnum.TWO_D:
        return MoviePlayViewEnum.TWO_D;
      default:
        return null;
    }
  }

  private setLang(lang: string): MoviePlayLangEnum {
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
  }
}

export class MoviePlayDTO implements IDeserialize<MoviePlayDTO, IMoviePlayRest>, IMoviePlayRest {
  public id: string;
  public start_date: string;
  public end_data: string;
  public tmdb_id: number;
  public played: PlayedDTO[];

  public deserialize(obj: IMoviePlayRest): MoviePlayDTO {
    this.id = obj.id;
    this.start_date = obj.start_date;
    this.end_data = obj.end_data;
    this.tmdb_id = obj.tmdb_id;
    this.played = [];
    obj.played.forEach(el => {
      this.played.push(new PlayedDTO().deserialize(el));
    });

    return this;
  }
}

export class CalendarDTO implements IDeserialize<CalendarDTO, ICalendar>, ICalendar {
  public from: string;
  public to: string;

  public deserialize(obj: ICalendar): CalendarDTO {
    this.from = obj.from;
    this.to = obj.to;
    return this;
  }
}

export class RepertuarDTO implements IDeserialize<RepertuarDTO, IRepertuarRest>, IRepertuarRest {
  public movies_play: MoviePlayDTO[];
  public locale_lang: string;
  public calendar: CalendarDTO;

  public deserialize(obj: IRepertuarRest): RepertuarDTO {
    this.movies_play = [];
    obj.movies_play.forEach(el => {
      this.movies_play.push(new MoviePlayDTO().deserialize(el));
    });
    this.locale_lang = obj.locale_lang;
    this.calendar = new CalendarDTO().deserialize(obj.calendar);
    return this;
  }
}
