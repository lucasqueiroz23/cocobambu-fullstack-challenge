import { Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  label: string = 'click me, please.';
  count: number = 0;
  constructor() {}

  ngOnInit() {
    console.log('ini')
  }

  buttonClicked() {
    this.count++;
    console.log(`you clicked me ${this.count} times`);
  }
}
