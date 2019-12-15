import { Pipe, PipeTransform } from '@angular/core';
import { MoviePlayDTO } from '@shared/models/repertuar/repertuarDTO';
import { CalendarService } from '@main/shared/services/calendar/calendar.service';
import { Observable } from 'rxjs';

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
