import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInformationsComponent } from './book-informations.component';

describe('BookInformationsComponent', () => {
  let component: BookInformationsComponent;
  let fixture: ComponentFixture<BookInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
