/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SetMoviePlayLangPipe } from './setMoviePlayLang.pipe';
import { RepertuarService } from '@shared/services/repertuar/repertuar.service';

describe('Pipe: SetMoviePlayLange', () => {
  it('create an instance', () => {
    let pipe = new SetMoviePlayLangPipe(null);
    expect(pipe).toBeTruthy();
  });
});
