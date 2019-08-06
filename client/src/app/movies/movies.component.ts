import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  constructor(private movieService: MovieService) {}
  
  movies: Movie[] = [];

  getMovies() {
    this.movieService.getMovies().subscribe(movies => (this.movies = movies));
  }

  ngOnInit() {
    this.getMovies();
  }
}




