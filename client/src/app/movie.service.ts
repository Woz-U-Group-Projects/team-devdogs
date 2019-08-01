import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "./models/movie";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  baseUrl: string = "http://localhost:5000/api/";

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + "movies");
  }
}
