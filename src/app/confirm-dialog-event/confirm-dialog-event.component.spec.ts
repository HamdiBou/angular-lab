import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogEventComponent } from './confirm-dialog-event.component';

describe('ConfirmDialogEventComponent', () => {
  let component: ConfirmDialogEventComponent;
  let fixture: ComponentFixture<ConfirmDialogEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogEventComponent]
    });
    fixture = TestBed.createComponent(ConfirmDialogEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
