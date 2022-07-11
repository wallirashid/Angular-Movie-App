import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageDetail, Movie, MovieVideo, MovieCredits } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { IMAGE_SIZES } from 'src/app/constants/images_sizes';
import { first, of } from 'rxjs';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie:Movie | null = null;
  videoDetail:MovieVideo [] = [];
  imageDetail = [];
  detailImage = IMAGE_SIZES;
  movieCredits : MovieCredits| null = null ;
  constructor(private router:ActivatedRoute,private movieService:MoviesService) { }
  ngOnInit(): void {
   this.router.params.pipe(first()).subscribe(({id})=>{
    this.movieService.getSingleMovie(id).subscribe((movieData:any)=>{
      this.movie = movieData;
    });
    this.getVideo(id);
    this.getImage(id);
    this.getMovieCredits(id);
   });
  }
  getVideo(id: string){
    this.movieService.getMovieVideo(id).subscribe((movieDetail) =>{
      this.videoDetail = movieDetail;
    });
  }
  getImage(id: string){
    this.movieService.getImage(id).subscribe((response:any) =>{
      this.imageDetail = response.backdrops;
      console.log(this.imageDetail);
    });
  }
  getMovieCredits(id:string){
    this.movieService.getMoviesCredit(id).subscribe((credits)=>{
      
      this.movieCredits = credits;
      console.log("Credits here",this.movieCredits);
    });
  }
  ngOnDestroy(){
    console.log("Ng destroyed component");
    
  }
}
