import { Component, OnInit } from '@angular/core';
import {Review} from '../models/review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

    model: Review = new Review();

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.reviewService.addReview(this.model).subscribe();
  }

}
