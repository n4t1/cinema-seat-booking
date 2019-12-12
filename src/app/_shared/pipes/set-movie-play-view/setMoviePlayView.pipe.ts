import { Pipe, PipeTransform } from '@angular/core';
import { MoviePlayViewEnum } from '@shared/models/repertuar/repertuarDTO';

@Pipe({
  name: 'setMoviePlayView'
})
export class SetMoviePlayViewPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case MoviePlayViewEnum.THREE_D:
        return '3D';
      case MoviePlayViewEnum.TWO_D:
        return '2D';
    }
  }

}
