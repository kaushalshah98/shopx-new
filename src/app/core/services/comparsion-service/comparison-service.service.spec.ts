import { TestBed } from '@angular/core/testing';

import { ComparisonServiceService } from './comparison-service.service';

describe('ComparisonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComparisonServiceService = TestBed.get(ComparisonServiceService);
    expect(service).toBeTruthy();
  });
});
