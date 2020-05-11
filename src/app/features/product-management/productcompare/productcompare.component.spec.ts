import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcompareComponent } from './productcompare.component';

describe('ProductcompareComponent', () => {
  let component: ProductcompareComponent;
  let fixture: ComponentFixture<ProductcompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductcompareComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
