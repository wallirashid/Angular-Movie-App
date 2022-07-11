import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataFromBackend, ImageDetail, Movie, MovieVideoDto,BackdropsImageRatio, MovieCredits } from '../models/movies';
import { of, switchMap } from 'rxjs';
import { CategoriesData } from '../models/categories';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = '689def43f71ba83ea10f1dc41e9d59c3';
  constructor(private http:HttpClient) { }

  getMovies(type:string = 'upcoming' ,counter = 12){
    return this.http.get<DataFromBackend>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).
    pipe(switchMap(response=>{
      return of(response.results.slice(0,counter));
    }))
  }
  searchMovie(page:number, searchValue?:string){
    const url = searchValue? '/search/movie': '/movie/top_rated';


    return this.http.get<DataFromBackend>(`${this.baseUrl}${url}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`).
    pipe(switchMap(response=>{
      return of(response.results);
    }))
  }

  getSingleMovie(id:string){
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }


  getMovieVideo(id:string){
    return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).
    pipe(switchMap(response=>{
      return of(response.results.slice(0,5));
    }))
  }

  getImage(id:string){
    return this.http.get<BackdropsImageRatio>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`).
    pipe(switchMap(response=>{
      return of(response);
    }))
  }

  getMoviesCredit(id:string){
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }
  getMoviesCategory(){
    return this.http.get<CategoriesData>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`);
  }

  getMovieByCategory(id:string,pageNumber:number){
    return this.http.get<DataFromBackend>(`${this.baseUrl}/discover/movie?with_genres=${id}&page=${pageNumber}&api_key=${this.apiKey}`).
    pipe(switchMap(response=>{
      return of(response.results);
    }))
  }



}
