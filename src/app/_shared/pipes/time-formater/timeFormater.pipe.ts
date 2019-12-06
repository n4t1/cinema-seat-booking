import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timeFormater'
})
export class TimeFormaterPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(
    value: string,
    date: string = new Date().toLocaleDateString(),
    transformPattern: string,
    args?: any
  ): string {
    if (!value || value.length === 0) {
      return '';
    }
    const convertedStringToDate: Date = new Date(date + ', ' + value);
    const transformedDate: string = this.datePipe.transform(
      convertedStringToDate,
      transformPattern
    );
    return transformedDate;
  }
}
