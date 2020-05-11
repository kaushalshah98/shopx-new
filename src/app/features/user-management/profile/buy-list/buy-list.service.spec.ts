import { TestBed } from '@angular/core/testing';

import { BuyListService } from './buy-list.service';

describe('BuyListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyListService = TestBed.get(BuyListService);
    expect(service).toBeTruthy();
  });
});
