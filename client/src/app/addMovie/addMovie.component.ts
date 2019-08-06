import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-addMovie',
  templateUrl: './addMovie.component.html',
  styleUrls: ['./addMovie.component.css']
})
export class AddMovieComponent implements OnInit {

    model: Movie = new Movie();

  constructor(private movieService: MovieService ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.movieService.addMovie(this.model).subscribe();
    }


}
