import { Pipe, PipeTransform } from '@angular/core';
import { RepertuarService } from '@shared/services/repertuar/repertuar.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MoviePlayLangEnum } from '@shared/models/repertuar/repertuarDTO';

@Pipe({
  name: 'setMoviePlayLang'
})
export class SetMoviePlayLangPipe implements PipeTransform {

  constructor(
    private repertuarService: RepertuarService
  ) {
  }

  transform(value: any, args?: any): Observable<string> {
    return this.repertuarService.localeLang.pipe(map(lang => {
      switch (value) {
        case MoviePlayLangEnum.LOCAL:
          return lang.toUpperCase();
        case MoviePlayLangEnum.DUBBING:
          return 'Dubbing';
        case MoviePlayLangEnum.SUBTITLES:
          return 'Napisy';
      }
    }));
  }

}
