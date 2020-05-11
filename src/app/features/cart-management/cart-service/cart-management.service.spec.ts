import { TestBed } from '@angular/core/testing';

import { CartManagementService } from './cart-management.service';

describe('CartManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartManagementService = TestBed.get(CartManagementService);
    expect(service).toBeTruthy();
  });
});
