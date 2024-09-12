import { Component, inject } from '@angular/core';
import { BookSearchService } from '../../services/book-search.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  private bookSearchService = inject(BookSearchService);

  label: string = 'click me, please.';
  constructor() {}

  buttonClicked() {
    this.bookSearchService.searchByTitle('harry potter');
  }
}
