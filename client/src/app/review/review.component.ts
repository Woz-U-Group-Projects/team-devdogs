import { Component, OnInit } from '@angular/core';
import {Review} from '../models/review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  model: Review[] = [];  

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviews().subscribe(Review =>{ 
      return this.model = Review}
    );
  }

}
