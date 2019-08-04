import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Page1Component } from './page1/page1.component';



// import { NgModule } from "@angular/core";
// import { Routes, RouterModule } from "@angular/router";
// import { HomeComponent } from "./home/home.component";

// const routes: Routes = [{ path: "", component: HomeComponent }];
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path:'contact', component: ContactComponent },
  { path: 'page1', component: Page1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
