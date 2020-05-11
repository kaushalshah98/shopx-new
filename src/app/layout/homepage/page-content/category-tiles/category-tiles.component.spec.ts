import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTilesComponent } from './category-tiles.component';

describe('CategoryTilesComponent', () => {
  let component: CategoryTilesComponent;
  let fixture: ComponentFixture<CategoryTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryTilesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
