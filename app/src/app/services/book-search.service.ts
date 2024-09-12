import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  apiUrl:string = 'https://www.googleapis.com/books/v1/';

  constructor(private http: HttpClient) { }

  searchByAuthor(): void {}
  searchByTitle(title: string): void { 
    this.http.get(this.apiUrl + `volumes?q=${title}`).subscribe((x)=> {
      console.log(x);
    })
  }
}
