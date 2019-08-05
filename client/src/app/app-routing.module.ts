import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddMovieComponent } from '../app/addMovie/addMovie.component';
import { AddReviewComponent } from '../app/add-review/add-review.component';
import { ReviewComponent } from '../app/review/review.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movies', component: MoviesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path:  'add', component: AddMovieComponent},
  {path: 'addReview', component: AddReviewComponent},
  {path: 'review', component: ReviewComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
