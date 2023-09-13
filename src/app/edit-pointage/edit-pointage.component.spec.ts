import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPointageComponent } from './edit-pointage.component';

describe('EditPointageComponent', () => {
  let component: EditPointageComponent;
  let fixture: ComponentFixture<EditPointageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPointageComponent]
    });
    fixture = TestBed.createComponent(EditPointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
