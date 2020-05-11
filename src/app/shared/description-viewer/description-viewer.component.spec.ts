import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionViewerComponent } from './description-viewer.component';

describe('DescriptionViewerComponent', () => {
  let component: DescriptionViewerComponent;
  let fixture: ComponentFixture<DescriptionViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionViewerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
