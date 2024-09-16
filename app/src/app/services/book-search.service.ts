import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BookInfo } from '../books/book-info';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  apiUrl: string = 'https://www.googleapis.com/books/v1/';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<Partial<BookInfo>> {
    if (!query || query === '')
      throw new Error('Nenhum título ou autor foi providenciado na busca.');

    return this.http
      .get(this.apiUrl + `volumes?q=${query}`)
      .pipe(map(res => res))
  }
}
