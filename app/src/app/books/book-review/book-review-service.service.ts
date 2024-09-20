import { Injectable } from '@angular/core';
import { Review } from '../book-info';

@Injectable({
  providedIn: 'root'
})
export class BookReviewServiceService {

  constructor() { }

  checkIfBookHasReview(id: string) {
    try {

    } catch (e) {

    }
  }

  deleteReview(id: string): void {
    try {
      localStorage.removeItem(id);
    } catch (e) {
      alert('Erro ao remover avaliação.');
    }
  }

  addReview(id: string, review: Review): void {
    try {
      localStorage.setItem(id, JSON.stringify(review));
    } catch (e) {
      alert('Erro ao adicionar avaliação.');
    }
  }

  toggleFavorite(id: string): void {
    try {
      const originalReview = localStorage.getItem(id);

      if (originalReview) {
        const newReview = JSON.parse(originalReview) as Review;
        this.addReview(id, {
          tags: newReview.tags,
          note: newReview.note,
          rating: newReview.rating,
          favorite: !newReview.favorite,
        })
      } 
    } catch (e) {
      console.log(e);
    }
  }
}
