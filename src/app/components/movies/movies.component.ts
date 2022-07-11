import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movieList: Movie[] = [];
  categoryId = '';
  searchValue:string  | null = null;
  constructor(private movies:MoviesService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.searchValue = '';
    
    
    this.getMovies(1);
    this.router.params.subscribe(({id})=>{
     if(id){
       this.categoryId = id;
       this.movieByCategory(id,1);
     }else{
      this.getMovies(1);
     }
    });
  }
  handleSearch(event:any){
    this.searchValue = event.target.value;
    if(this.searchValue){
      this.searchMovies(1,this.searchValue);
    }
  }

  getMovies(page:number,searchMovie?:string){
   this.searchMovies(page,searchMovie);
  }
  searchMovies(page:number,searchTerm?:string){
    this.movies.searchMovie(page,searchTerm).subscribe((movie)=>{
      this.movieList = movie;
    });
  }
  movieByCategory(id:string,pageNumber:number){
    this.movies.getMovieByCategory(id,pageNumber).subscribe((result)=>{
      this.movieList = result;
    });
  }

  paginate(event:any){
    let pageNumber = event.page + 1;
    if(this.categoryId){
      this.movieByCategory(this.categoryId,pageNumber);
    }else{
      if(this.searchValue){
        this.getMovies(pageNumber,this.searchValue);
      }else{
        this.getMovies(pageNumber);
      }
     
    }


    
    
  }
}
