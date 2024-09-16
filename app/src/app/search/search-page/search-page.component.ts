import { Component, inject } from '@angular/core';
import { BookSearchService } from '../../services/book-search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  private bookSearchService = inject(BookSearchService);
  userInput: string = '';

  label: string = 'Pesquisar';
  constructor() {}

  search() {
    console.log(this.userInput)
    try {
      this.bookSearchService.search(this.userInput);
    } catch(error) {
      console.log(error);
    }
  }
}
