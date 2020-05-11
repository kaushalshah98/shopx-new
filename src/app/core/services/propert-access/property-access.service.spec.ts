import { TestBed } from '@angular/core/testing';

import { PropertyAccessService } from './property-access.service';

describe('PropertyAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertyAccessService = TestBed.get(PropertyAccessService);
    expect(service).toBeTruthy();
  });
});
