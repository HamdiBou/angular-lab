import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMemberComponent } from './selected-member.component';

describe('SelectedMemberComponent', () => {
  let component: SelectedMemberComponent;
  let fixture: ComponentFixture<SelectedMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedMemberComponent]
    });
    fixture = TestBed.createComponent(SelectedMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
