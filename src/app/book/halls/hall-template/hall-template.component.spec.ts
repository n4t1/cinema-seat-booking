import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallTemplateComponent } from './hall-template.component';

describe('HallTemplateComponent', () => {
  let component: HallTemplateComponent;
  let fixture: ComponentFixture<HallTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
