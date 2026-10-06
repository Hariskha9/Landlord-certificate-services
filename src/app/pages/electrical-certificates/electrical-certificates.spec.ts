import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalCertificates } from './electrical-certificates';

describe('ElectricalCertificates', () => {
  let component: ElectricalCertificates;
  let fixture: ComponentFixture<ElectricalCertificates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricalCertificates],
    }).compileComponents();

    fixture = TestBed.createComponent(ElectricalCertificates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
