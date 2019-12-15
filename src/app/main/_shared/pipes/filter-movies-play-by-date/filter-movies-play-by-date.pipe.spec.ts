import { FilterMoviesPlayByDatePipe } from './filter-movies-play-by-date.pipe';

describe('FilterMoviesPlayByDatePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterMoviesPlayByDatePipe(null);
    expect(pipe).toBeTruthy();
  });
});
