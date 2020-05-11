import { TestBed } from '@angular/core/testing';

import { HttpcacheService } from './httpcache.service';

describe('HttpcacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpcacheService = TestBed.get(HttpcacheService);
    expect(service).toBeTruthy();
  });
});
