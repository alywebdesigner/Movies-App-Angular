import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from '../models/movie';
import { of, switchMap } from 'rxjs';
import { MovieGenreDto } from '../models/genre';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseurl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'd1c2bab61ac445418b96354c7a083335';
  // type: any;
  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    // ✅ Use the parameter 'type', not 'this.type'
    return this.http.get<MovieDto>(`${this.baseurl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  searchMovies(page: number, searchValue?: string) {
    let url = `${this.baseurl}/movie/popular?page=${page}&api_key=${this.apiKey}`;
    if (searchValue) {
      url = `${this.baseurl}/search/movie?page=${page}&query=${encodeURIComponent(
        searchValue
      )}&api_key=${this.apiKey}`;
    }
    return this.http.get<MovieDto>(url).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.baseurl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieVideos(id: string) {
    // ✅ Use the parameter 'type', not 'this.type'
    return this.http
      .get<MovieVideoDto>(`${this.baseurl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseurl}/movie/${id}/images?api_key=${this.apiKey}`);
  }
  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(
      `${this.baseurl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getSimilarMovies(id: string) {
    return this.http
      .get<MovieDto>(`${this.baseurl}/movie/${id}/similar?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 4));
        })
      );
  }

  getMoviesGenres() {
    return this.http
      .get<MovieGenreDto>(`${this.baseurl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }

  getMovieByGenre(genreId: string, page: number = 1) {
    return this.http
      .get<MovieDto>(
        `${this.baseurl}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
