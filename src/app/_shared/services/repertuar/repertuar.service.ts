import { Injectable } from '@angular/core';
import mockRepertuarREST from '../../../../assets/mock-data/repertuarREST.mock.json';
import {
  RepertuarDTO,
  MoviePlayDTO,
  CalendarDTO,
  PlayedDTO
} from '@shared/models/repertuar/repertuarDTO.js';
import { IRepertuarRest } from '@shared/models/repertuar/repertuarREST.interface.js';
import { HttpClient } from '@angular/common/http';
import { map, catchError, filter, first } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable()
export class RepertuarService {
  private repertuar$: BehaviorSubject<RepertuarDTO> = new BehaviorSubject<RepertuarDTO>(null);

  private get getRepertuar(): Observable<RepertuarDTO> {
    return this.repertuar$.asObservable().pipe(filter(obs => obs !== null));
  }

  private set setRepertuar(val: RepertuarDTO) {
    this.repertuar$.next(val);
  }

  constructor(private httpClient: HttpClient) {
    this.setRepertuarDTO();
  }

  public get allMovies(): Observable<MoviePlayDTO[]> {
    return this.getRepertuar.pipe(
      map(repertuar => {
        return repertuar.movies_play;
      }),
      first()
    );
  }

  public get localeLang(): Observable<string> {
    return this.getRepertuar.pipe(
      map(repertuar => {
        return repertuar.locale_lang;
      }),
      first()
    );
  }

  public get calendar(): Observable<CalendarDTO> {
    return this.getRepertuar.pipe(
      map(repertuar => {
        return repertuar.calendar;
      }),
      first()
    );
  }

  public getMovie(id: number): Observable<MoviePlayDTO> {
    return this.allMovies.pipe(
      map(moviesPlay => {
        return moviesPlay[id];
      }),
      first()
    );
  }

  public getMoviePlayed(id: number): Observable<PlayedDTO[]> {
    return this.getMovie(id).pipe(
      map(moviePlay => {
        return moviePlay.played;
      }),
      first()
    );
  }

  private setRepertuarDTO() {
    this.repertuarRSET.subscribe(response => {
      this.setRepertuar = response;
    });
  }

  private get repertuarRSET(): Observable<RepertuarDTO> {
    const mockRepertuarJsonPath = 'assets/mock-data/repertuarREST.mock.json';
    const errorUrl: string = mockRepertuarJsonPath;

    return this.httpClient.get<IRepertuarRest>(mockRepertuarJsonPath).pipe(
      map(
        response => {
          const deserializedResponse = new RepertuarDTO().deserialize(response);
          console.log('getRepertuar: ', deserializedResponse);
          return deserializedResponse;
        },
        catchError(error => {
          console.log(errorUrl, error);
          return throwError(error);
        })
      )
    );
  }
}
