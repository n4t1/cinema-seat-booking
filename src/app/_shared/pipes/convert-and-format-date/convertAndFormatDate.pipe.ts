import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'convertAndFormatDate'
})
export class ConvertAndFormatDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {
  }

  transform(value: string, transformPattern?: string, args?: any): string | Date {
    if (!value || value.length === 0) {
      return '';
    }
    const convertedStringToDate: Date = new Date(value);

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
