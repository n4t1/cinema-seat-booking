import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'yearFormatter'
})
export class YearFormatterPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: string, transformPattern: string, args?: any): string {
    if (!value || value.length === 0) {
      return '';
    }
    const convertedStringToDate: Date = new Date(value);
    const transformedDate: string = this.datePipe.transform(
      convertedStringToDate,
      transformPattern
    );
    return transformedDate;
  }
}
