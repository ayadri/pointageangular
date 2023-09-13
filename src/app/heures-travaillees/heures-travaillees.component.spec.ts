import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeuresTravailleesComponent } from './heures-travaillees.component';

describe('HeuresTravailleesComponent', () => {
  let component: HeuresTravailleesComponent;
  let fixture: ComponentFixture<HeuresTravailleesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeuresTravailleesComponent]
    });
    fixture = TestBed.createComponent(HeuresTravailleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
