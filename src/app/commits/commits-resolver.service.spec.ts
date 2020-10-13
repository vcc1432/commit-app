import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CommitsResolverService } from './commits-resolver.service';

describe('CommitsResolverService', () => {
  let service: CommitsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommitsResolverService]
    });
    service = TestBed.inject(CommitsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
