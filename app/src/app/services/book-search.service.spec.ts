import { TestBed } from '@angular/core/testing';

import { BookSearchService } from './book-search.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('BookSearchService', () => {
  let service: BookSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    const httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BookSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw an error if the search query is empty', ()=> {
    expect(() => service.search('')).toThrow(new Error('Nenhum título ou autor foi providenciado na busca.'));
  });

  
});
