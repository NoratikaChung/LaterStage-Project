import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeKitStatusComponent } from './change-kit-status.component';

describe('ChangeKitStatusComponent', () => {
  let component: ChangeKitStatusComponent;
  let fixture: ComponentFixture<ChangeKitStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeKitStatusComponent]
    });
    fixture = TestBed.createComponent(ChangeKitStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
