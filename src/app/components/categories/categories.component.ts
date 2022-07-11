import { Component, OnInit } from '@angular/core';
import { CategoriesData, Genre } from 'src/app/models/categories';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoriesList : Genre [] = [];
  constructor(private categoryService:MoviesService) { }

  ngOnInit(): void {
    this.categoryService.getMoviesCategory().subscribe((response)=>{
      this.categoriesList = response.genres;
      console.log("Response here",this.categoriesList);
    });
  }

}
