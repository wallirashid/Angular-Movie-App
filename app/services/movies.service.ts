import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataFromBackend } from '../models/movies';
import { of, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = '689def43f71ba83ea10f1dc41e9d59c3';
  constructor(private http:HttpClient) { }

  getMovies(type:string = 'upcoming' ,counter = 12){
    // return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=689def43f71ba83ea10f1dc41e9d59c3");
    return this.http.get<DataFromBackend>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).
    pipe(switchMap(response=>{
      return of(response.results.slice(0,counter));
    }))
  }
  searchMovie(page:number){
    // return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=689def43f71ba83ea10f1dc41e9d59c3");
    return this.http.get<DataFromBackend>(`${this.baseUrl}/movie/top_rated?page=${page}&api_key=${this.apiKey}`).
    pipe(switchMap(response=>{
      return of(response.results);
    }))
  }




}
