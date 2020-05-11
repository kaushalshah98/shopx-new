import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserOrderComponent } from './view-user-order.component';

describe('ViewUserOrderComponent', () => {
  let component: ViewUserOrderComponent;
  let fixture: ComponentFixture<ViewUserOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserOrderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
