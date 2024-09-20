import { TestBed } from '@angular/core/testing';

import { BookReviewServiceService } from './book-review-service.service';

describe('BookReviewServiceService', () => {
  let service: BookReviewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookReviewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
