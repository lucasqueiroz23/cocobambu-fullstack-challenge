import { Component, Input } from '@angular/core';
import { Book, Volume } from '../book-info';
import { BookBuilder } from '../book-builder';

@Component({
  selector: 'app-book-view',
  standalone: true,
  imports: [],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.css'
})
export class BookViewComponent {
  emptyVolume: Volume = {
    kind: '',
    etag: '',
    id: '',
    selfLink: '',
  }

  @Input({required: true}) data: Volume = this.emptyVolume;

  book: Book

  constructor(){
    this.book = new BookBuilder(this.data);
  }

  toggleFavorite() {

  }
}
