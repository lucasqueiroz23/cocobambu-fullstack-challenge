import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  apiUrl:string = 'https://www.googleapis.com/books/v1/';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<any> { 
    if(!query || query === '') 
      throw new Error('Nenhum título ou autor foi providenciado na busca.');

    return this.http
    .get(this.apiUrl + `volumes?q=${query}`)
    .pipe(map(res=>res))
  }
}
