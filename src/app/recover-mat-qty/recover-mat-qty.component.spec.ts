import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverMatQtyComponent } from './recover-mat-qty.component';

describe('RecoverMatQtyComponent', () => {
  let component: RecoverMatQtyComponent;
  let fixture: ComponentFixture<RecoverMatQtyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverMatQtyComponent]
    });
    fixture = TestBed.createComponent(RecoverMatQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
