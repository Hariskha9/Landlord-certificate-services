import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegionellaRiskAssessment } from './legionella-risk-assessment';

describe('LegionellaRiskAssessment', () => {
  let component: LegionellaRiskAssessment;
  let fixture: ComponentFixture<LegionellaRiskAssessment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegionellaRiskAssessment],
    }).compileComponents();

    fixture = TestBed.createComponent(LegionellaRiskAssessment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
