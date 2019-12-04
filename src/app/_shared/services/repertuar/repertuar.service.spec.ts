import { TestBed } from '@angular/core/testing';

import { RepertuarService } from './repertuar.service';

describe('RepertuarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepertuarService = TestBed.get(RepertuarService);
    expect(service).toBeTruthy();
  });
});
