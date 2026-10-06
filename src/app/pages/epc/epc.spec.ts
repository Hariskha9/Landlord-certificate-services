import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Epc } from './epc';

describe('Epc', () => {
  let component: Epc;
  let fixture: ComponentFixture<Epc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Epc],
    }).compileComponents();

    fixture = TestBed.createComponent(Epc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
