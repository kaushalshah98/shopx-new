import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCartitemsComponent } from './view-cartitems.component';

describe('ViewCartitemsComponent', () => {
  let component: ViewCartitemsComponent;
  let fixture: ComponentFixture<ViewCartitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCartitemsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCartitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
