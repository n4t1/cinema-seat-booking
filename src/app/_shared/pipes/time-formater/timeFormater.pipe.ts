import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timeFormater'
})
export class TimeFormaterPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: string, args?: any): any {
    const convertedStringToDate: Date = new Date(
      new Date().toLocaleDateString() + ', ' + value
    );
    const showOnlyHourAndMinutes: string = this.datePipe.transform(
      convertedStringToDate,
      'HH:mm'
    );
    return showOnlyHourAndMinutes;
  }
}
