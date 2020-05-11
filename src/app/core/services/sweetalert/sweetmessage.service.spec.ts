import { TestBed } from '@angular/core/testing';

import { SweetmessageService } from './sweetmessage.service';

describe('SweetmessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SweetmessageService = TestBed.get(SweetmessageService);
    expect(service).toBeTruthy();
  });
});
