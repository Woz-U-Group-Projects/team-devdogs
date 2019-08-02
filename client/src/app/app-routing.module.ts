import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddMovieComponent } from "../app/addMovie/addMovie.component"

const routes: Routes = [{ path: "", component: HomeComponent }, {path: "add", component: AddMovieComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
