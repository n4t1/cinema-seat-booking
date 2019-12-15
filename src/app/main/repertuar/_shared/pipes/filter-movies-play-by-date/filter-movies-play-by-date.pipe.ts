import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMoviesPlayByDate'
})
export class FilterMoviesPlayByDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
