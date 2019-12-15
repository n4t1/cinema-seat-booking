import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class CalendarService {
  private selectedDate$: ReplaySubject<Date> = new ReplaySubject(1);

  constructor() { }

  public get getSelectedDate(): Observable<Date> {
    return this.selectedDate$.asObservable();
  }

  public set setSelectedDate(value: Date) {
    this.selectedDate$.next(value);
  }
}
