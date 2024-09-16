import { Component, inject } from '@angular/core';
import { BookSearchService } from '../../services/book-search.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { BookInfo } from '../../books/book-info';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  private bookSearchService = inject(BookSearchService);
  userInput = new FormControl('');

  searchResult: Partial<BookInfo> = {}
  readonly label: string = 'pesquisar';

  constructor() { }

  search() {
    this.bookSearchService.search(this.userInput.value ?? '').subscribe({
      next: res => {
        this.searchResult = res;
        console.log(this.searchResult)
      },
      error: e => console.log(e),
    })
  }
}
