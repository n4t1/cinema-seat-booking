import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HallDTO, HallsDTO } from '../../models';

@Injectable()
export class HallsService {
  private halls$: BehaviorSubject<HallsDTO> = new BehaviorSubject<HallsDTO>(null);

  private get getHalls(): Observable<HallsDTO> {
    return this.halls$.asObservable().pipe(filter(obs => obs !== null));
  }

  private set setHalls(val: HallsDTO) {
    this.halls$.next(val);
  }

  constructor(private httpClient: HttpClient) {
    this.setHallsDTO();
  }

  public get allHalls(): Observable<HallDTO[]> {
    return this.getHalls.pipe(
      map(halls => {
        return halls.halls;
      }),
      first()
    );
  }

  public getHall(id: number): Observable<HallDTO> {
    return this.allHalls.pipe(
      map(halls => {
        return halls[id];
      }),
      first()
    );
  }

  private setHallsDTO() {
    this.hallsRSET.subscribe(response => {
      this.setHalls = response;
    });
  }

  private get hallsRSET(): Observable<HallsDTO> {
    const mockHallsJsonPath = 'assets/mock-data/hallsREST.mock.json';
    const errorUrl: string = mockHallsJsonPath;

    return this.httpClient.get<HallsDTO>(mockHallsJsonPath).pipe(
      map(
        response => {
          const deserializedResponse = new HallsDTO().deserialize(response);
          console.log('getHalls: ', deserializedResponse);
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
