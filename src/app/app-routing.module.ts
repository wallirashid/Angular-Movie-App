import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"movies",component:MoviesComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"movie/:id",component:MovieDetailComponent},
  {path:"movies/categories/:id",component:MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
