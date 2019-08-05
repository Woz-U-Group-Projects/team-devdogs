import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './models/review';

@Injectable({
    providedIn: 'root'
})
export class ReviewService {
    baseUrl: string = 'http://localhost:5000/api/';

    constructor(private http: HttpClient) {}

    getReviews(): Observable<Review[]> {
        return this.http.get<Review[]>(this.baseUrl + 'reviews');
    }

    addReview(review: Review) {
        return this.http.post<Review>(this.baseUrl + 'reviews', review);
    }

}