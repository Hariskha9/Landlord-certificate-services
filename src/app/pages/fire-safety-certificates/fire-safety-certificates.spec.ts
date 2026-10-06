import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireSafetyCertificates } from './fire-safety-certificates';

describe('FireSafetyCertificates', () => {
  let component: FireSafetyCertificates;
  let fixture: ComponentFixture<FireSafetyCertificates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireSafetyCertificates],
    }).compileComponents();

    fixture = TestBed.createComponent(FireSafetyCertificates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
