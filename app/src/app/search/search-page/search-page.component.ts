import { Component, inject } from '@angular/core';
import { BookSearchService } from '../../services/book-search.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  private bookSearchService = inject(BookSearchService);
  userInput = new FormControl('');

  result = '' 
  readonly label: string = 'pesquisar';

  constructor() {
  }

  search() {

    try {
      this.bookSearchService.search(this.userInput.value ?? '').subscribe({
        next: res => {
          this.result = res
          console.log(this.result)
        },
        error: e => console.log(e),
      })
    } catch(error) {
      console.log(error);
    }
  }
}
