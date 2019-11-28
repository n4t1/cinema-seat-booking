import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTemplateComponent } from './day-template.component';

describe('DayTemplateComponent', () => {
  let component: DayTemplateComponent;
  let fixture: ComponentFixture<DayTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
