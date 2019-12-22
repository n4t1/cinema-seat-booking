import { TestBed } from '@angular/core/testing';

import { MovieTMDBService } from './movie-tmdb.service';

describe('MovieDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieTMDBService = TestBed.get(MovieTMDBService);
    expect(service).toBeTruthy();
  });
});
