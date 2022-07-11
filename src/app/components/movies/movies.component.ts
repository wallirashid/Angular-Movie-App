import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movieList: Movie[] = []
  constructor(private movies:MoviesService) { }

  ngOnInit(): void {
    this.movies.searchMovie(3).subscribe((movie)=>{
      this.movieList = movie;
    });
  }
}
