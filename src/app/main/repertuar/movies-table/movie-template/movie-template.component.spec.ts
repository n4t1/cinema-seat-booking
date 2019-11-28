import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTemplateComponent } from './movie-template.component';

describe('MovieTemplateComponent', () => {
  let component: MovieTemplateComponent;
  let fixture: ComponentFixture<MovieTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
