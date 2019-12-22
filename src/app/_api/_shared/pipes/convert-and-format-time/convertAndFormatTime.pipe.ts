import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'convertAndFormatTime'
})
export class ConvertAndFormatTimePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {
  }

  transform(value: string, date: string = new Date().toJSON().split('T')[0], transformPattern?: string, args?: any): string | Date {
    if (!value || value.length === 0) {
      return '';
    }
    const convertedStringToDate: Date = new Date(date + 'T' + value + '+01:00');

    if (!transformPattern) {
      return convertedStringToDate;
    }

    const transformedDate: string = this.datePipe.transform(
      convertedStringToDate,
      transformPattern
    );
    return transformedDate;
  }
}
