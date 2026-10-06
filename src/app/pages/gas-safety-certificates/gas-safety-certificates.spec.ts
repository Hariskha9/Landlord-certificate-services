import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasSafetyCertificates } from './gas-safety-certificates';

describe('GasSafetyCertificates', () => {
  let component: GasSafetyCertificates;
  let fixture: ComponentFixture<GasSafetyCertificates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasSafetyCertificates],
    }).compileComponents();

    fixture = TestBed.createComponent(GasSafetyCertificates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
