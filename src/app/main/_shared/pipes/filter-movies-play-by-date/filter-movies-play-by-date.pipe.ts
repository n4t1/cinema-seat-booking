import { Pipe, PipeTransform } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { MoviePlayDTO } from '@api/shared';
import { CalendarService } from '../../services';

@Pipe({
  name: 'filterMoviesPlayByDate',
  pure: false
})
export class FilterMoviesPlayByDatePipe implements PipeTransform {

  constructor(
    private calendarService: CalendarService
  ) {
  }


  transform(value: MoviePlayDTO[], ...args: any[]): Observable<MoviePlayDTO[]> {
    if (!value || value.length === 0) { return EMPTY; }
    return new Observable<MoviePlayDTO[]>((obs) => {
      this.calendarService.getSelectedDate.subscribe(selectedDate => {
        const filteredValue: MoviePlayDTO[] = value.filter(movie =>
          new Date(movie.start_date).valueOf() <= selectedDate.valueOf() && new Date(movie.end_data).valueOf() >= selectedDate.valueOf()
        );
        obs.next(filteredValue);
        obs.complete();
      });
    });
  }

}
