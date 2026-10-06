import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsbestosSurvey } from './asbestos-survey';

describe('AsbestosSurvey', () => {
  let component: AsbestosSurvey;
  let fixture: ComponentFixture<AsbestosSurvey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsbestosSurvey],
    }).compileComponents();

    fixture = TestBed.createComponent(AsbestosSurvey);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
