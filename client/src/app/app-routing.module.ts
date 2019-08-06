import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddMovieComponent } from "../app/addMovie/addMovie.component"
import { AddReviewComponent } from "../app/add-review/add-review.component"
import { ReviewComponent } from "../app/review/review.component";

const routes: Routes = [{ path: "", component: HomeComponent }, {path: "add", component: AddMovieComponent}, {path: "addReview", component: AddReviewComponent}, {path: "review", component: ReviewComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
