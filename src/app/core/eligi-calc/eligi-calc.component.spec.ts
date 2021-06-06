import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligiCalcComponent } from './eligi-calc.component';

describe('EligiCalcComponent', () => {
  let component: EligiCalcComponent;
  let fixture: ComponentFixture<EligiCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligiCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligiCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
