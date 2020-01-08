import { TestBed } from '@angular/core/testing';

import { BetterScreenReadService } from './better-screen-read.service';

describe('BetterScreenReadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BetterScreenReadService = TestBed.get(BetterScreenReadService);
    expect(service).toBeTruthy();
  });
});
