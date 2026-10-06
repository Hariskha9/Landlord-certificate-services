import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireDoorsProtectionPage } from './fire-doors-protection-page';

describe('FireDoorsProtectionPage', () => {
  let component: FireDoorsProtectionPage;
  let fixture: ComponentFixture<FireDoorsProtectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireDoorsProtectionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FireDoorsProtectionPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
