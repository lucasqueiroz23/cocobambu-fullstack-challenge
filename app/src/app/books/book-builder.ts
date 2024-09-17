import { Book, Volume, Review } from "./book-info";

export class BookBuilder implements Book {
    id: string;
    info: Volume;
    review: Review;

    constructor(volume: Volume) {
        this.id = volume.id;
        this.info = volume;
        this.review = this.getReview();
    }

    getReview(): Review {
        const emptyReview = { tags: [], note: '', rating: 0 };

        const review = localStorage.getItem(this.id);
        if (!review) return emptyReview;

        try {
            const storedReview = JSON.parse(review);
            return {
                tags: storedReview['tags'],
                note: storedReview['note'],
                rating: storedReview['rating']
            }
        } catch(e) {
            return emptyReview;
        }
    }
}
