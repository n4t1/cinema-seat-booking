import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbMovieSearchComponent } from './tmdb-movie-search.component';

describe('TmdbMovieSearchComponent', () => {
  let component: TmdbMovieSearchComponent;
  let fixture: ComponentFixture<TmdbMovieSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmdbMovieSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbMovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
