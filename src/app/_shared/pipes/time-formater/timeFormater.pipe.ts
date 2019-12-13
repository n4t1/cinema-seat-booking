import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timeFormater'
})
export class TimeFormaterPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(
    value: string,
    date: string = new Date().toJSON().split('T')[0],
    transformPattern: string,
    args?: any
  ): string {
    if (!value || value.length === 0) {
      return '';
    }
    const convertedStringToDate: Date = new Date(date + 'T' + value + 'Z');
    const transformedDate: string = this.datePipe.transform(
      convertedStringToDate,
      transformPattern
    );
    return transformedDate;
  }
}
