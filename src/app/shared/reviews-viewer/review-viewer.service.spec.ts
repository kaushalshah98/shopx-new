import { TestBed } from '@angular/core/testing';

import { ReviewViewerService } from './review-viewer.service';

describe('ReviewViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewViewerService = TestBed.get(ReviewViewerService);
    expect(service).toBeTruthy();
  });
});
