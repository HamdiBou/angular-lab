import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEventsComponent } from './modal-events.component';

describe('ModalEventsComponent', () => {
  let component: ModalEventsComponent;
  let fixture: ComponentFixture<ModalEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEventsComponent]
    });
    fixture = TestBed.createComponent(ModalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
