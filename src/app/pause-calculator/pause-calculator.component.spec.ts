import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseCalculatorComponent } from './pause-calculator.component';

describe('PauseCalculatorComponent', () => {
  let component: PauseCalculatorComponent;
  let fixture: ComponentFixture<PauseCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PauseCalculatorComponent]
    });
    fixture = TestBed.createComponent(PauseCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
