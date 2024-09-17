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
  maxResults = new FormControl(5);
  paginationOptions = {
    maxResults: [
      5, 10, 15, 20, 25, 30, 35, 40
    ],
  }

  searchResult: Partial<BookInfo> = {}
  readonly label: string = 'pesquisar';

  constructor() { }

  search() {
    if (!this.userInput.value) {
      alert('O campo de busca não pode ficar em branco!');
      this.searchResult = {}
      return
    }

    this.bookSearchService.search(this.userInput.value, this.maxResults.value, 0).subscribe({
      next: res => {
        this.searchResult = res;
      },
      error: e => console.log(e),
    })
  }
}
