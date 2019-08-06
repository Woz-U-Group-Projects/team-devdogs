import { Component, OnInit } from '@angular/core';
import {Review} from '../models/review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

    

  constructor(private reviewService: ReviewService) { }

  reviews: Review[] = [];

  ngOnInit() {
    this.reviewService.getReviews().subscribe(reviews => (this.reviews = reviews))
    ;
  }

}
