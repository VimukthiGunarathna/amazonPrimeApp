import { TestBed } from '@angular/core/testing';

import { CoverListService } from './cover-list.service';

describe('CoverListService', () => {
  let service: CoverListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoverListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
