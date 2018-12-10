import { TestBed } from '@angular/core/testing';

import { ForeignService } from './foreign.service';

describe('ForeignService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForeignService = TestBed.get(ForeignService);
    expect(service).toBeTruthy();
  });
});
