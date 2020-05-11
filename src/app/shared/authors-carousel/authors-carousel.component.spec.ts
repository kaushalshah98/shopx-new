import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsCarouselComponent } from './authors-carousel.component';

describe('AuthorsCarouselComponent', () => {
  let component: AuthorsCarouselComponent;
  let fixture: ComponentFixture<AuthorsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsCarouselComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
