import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireRiskAssessment } from './fire-risk-assessment';

describe('FireRiskAssessment', () => {
  let component: FireRiskAssessment;
  let fixture: ComponentFixture<FireRiskAssessment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireRiskAssessment],
    }).compileComponents();

    fixture = TestBed.createComponent(FireRiskAssessment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
