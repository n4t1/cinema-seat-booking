import { Injectable } from '@angular/core';
import mockRepertuarREST from '../../../../assets/mock-data/repertuarREST.mock.json';
import { RepertuarDTO, MoviePlayDTO } from '@shared/models/repertuar/repertuarDTO.js';
import { IRepertuarRest } from '@shared/models/repertuar/repertuarREST.interface.js';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class RepertuarService {

  constructor(
    private httpClient: HttpClient
  ) {
    this.setRepertuar();
  }

  public get allMovies(): MoviePlayDTO[] {
    return null; //this.repertuar.movies_play;
  }

  public getMovie(id: number): MoviePlayDTO {
    return this.allMovies[id];
  }

  public getMoviePlayTimes(id: number): string[] {
    return this.getMovie(id).play_times;
  }

  private setRepertuar() {
    console.log('before', this.repertuar);
    
    this.repertuar.subscribe(response => {

      console.log('in', this.repertuar);
    });

    console.log('after', this.repertuar);
  }

  private get repertuar(): Observable<RepertuarDTO> {
    const mockRepertuarJsonPath: string = 'src\assets\mock-data\repertuarREST.mock.json';
    const errorUrl: string = mockRepertuarJsonPath;
  
    return this.httpClient.get<IRepertuarRest>(mockRepertuarJsonPath).pipe(
      map(response => {
        const deserializedResponse = new RepertuarDTO().deserialize(response);
        console.log("getRepertuar: ", deserializedResponse);
        return deserializedResponse;
      },
      catchError(error => {
        console.log(errorUrl, error);
        return throwError(error);
      }))
    );
  }
}
