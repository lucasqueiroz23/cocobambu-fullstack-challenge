import { Component, inject } from '@angular/core';
import { BookSearchService } from '../../services/book-search.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { BookInfo } from '../../books/book-info';
import { BookViewComponent } from '../../books/book-view/book-view.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe, BookViewComponent],
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

  emptyResult = {
    kind: '',
    items: [],
    totalItems: 0,
  }

  searchResult: BookInfo = this.emptyResult;

  
  readonly label: string = 'pesquisar';

  constructor() { }

  search() {
    if (!this.userInput.value) {
      alert('O campo de busca não pode ficar em branco!');
      this.searchResult = this.emptyResult;
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
