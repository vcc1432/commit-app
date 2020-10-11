import { TestBed } from '@angular/core/testing';

import { CommitsResolverService } from './commits-resolver.service';

describe('CommitsResolverService', () => {
  let service: CommitsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
