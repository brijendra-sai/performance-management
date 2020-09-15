import { TestBed } from '@angular/core/testing';

import { PmaService } from './pma.service';

describe('PmaService', () => {
  let service: PmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
