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

  search(query: string, maxResults?: number | null, startIndex?: number | null): Observable<BookInfo> {
    if (!query || query === '')
      throw new Error('Nenhum título ou autor foi providenciado na busca.');

    return this.http
      .get<BookInfo>(this.createRequestUrl(query, maxResults, startIndex))
      .pipe(map(res => res))
  }

  createRequestUrl(query: string, maxResults?: number | null, startIndex?: number | null): string {

    let requestUrl: string = this.apiUrl;

    requestUrl += `volumes?q=${query}`;

    if (startIndex) requestUrl += `&startIndex=${startIndex}`;
    if (maxResults) requestUrl += `&maxResults=${maxResults}`;

    return requestUrl;
  }
}
