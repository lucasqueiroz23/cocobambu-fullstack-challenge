import { Component, Input } from '@angular/core';
import { Volume } from '../book-info';

@Component({
  selector: 'app-book-view',
  standalone: true,
  imports: [],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.css'
})
export class BookViewComponent {
  @Input({required: true}) data: Partial<Volume> = {};
}
