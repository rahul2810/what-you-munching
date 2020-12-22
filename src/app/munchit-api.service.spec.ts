import { TestBed } from '@angular/core/testing';

import { MunchitAPIService } from './munchit-api.service';

describe('MunchitAPIService', () => {
  let service: MunchitAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunchitAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
