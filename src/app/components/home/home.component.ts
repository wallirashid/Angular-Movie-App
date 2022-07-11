import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieList:Movie[] = [];
  trendingMovies:Movie[] = [];
  topRatedMovie : Movie[] = [];


  constructor(private movies:MoviesService) { }

  ngOnInit(): void {
    this.movies.getMovies('upcoming').subscribe((movie)=>{
      this.movieList = movie;
    });
    this.movies.getMovies('top_rated').subscribe((movie)=>{
      this.topRatedMovie = movie;
    });
 
  }

}
