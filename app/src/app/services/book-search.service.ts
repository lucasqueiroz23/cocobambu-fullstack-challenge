import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  apiUrl:string = 'https://www.googleapis.com/books/v1/';

  constructor(private http: HttpClient) { }

  search(query: string): void { 
    if(!query || query === '') 
      throw new Error('Nenhum título ou autor foi providenciado na busca.');

    this.http.get(this.apiUrl + `volumes?q=${query}`).subscribe((x)=> {
      console.log(x);
    })
  }
}
