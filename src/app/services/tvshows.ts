import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, TvShowsDto, MovieImages, MovieVideoDto } from '../models/movie';
import { of, switchMap } from 'rxjs';
import { MovieGenreDto } from '../models/genre';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  baseurl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'd1c2bab61ac445418b96354c7a083335';
  // type: any;
  constructor(private http: HttpClient) {}

  getTvShows(type: string = 'upcoming', count: number = 12) {
    // ✅ Use the parameter 'type', not 'this.type'
    return this.http.get<TvShowsDto>(`${this.baseurl}/tv/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  searchTvShows(page: number, searchValue?: string) {
    let url = `${this.baseurl}/tv/popular?page=${page}&api_key=${this.apiKey}`;
    if (searchValue) {
      url = `${this.baseurl}/search/tv?page=${page}&query=${encodeURIComponent(
        searchValue
      )}&api_key=${this.apiKey}`;
    }
    return this.http.get<TvShowsDto>(url).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getTvShowDetail(id: string) {
    return this.http.get<Movie>(`${this.baseurl}/tv/${id}?api_key=${this.apiKey}`);
  }

  getTvShowsVideos(id: string) {
    // ✅ Use the parameter 'type', not 'this.type'
    return this.http
      .get<MovieVideoDto>(`${this.baseurl}/tv/${id}/videos?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  getTvShowsImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseurl}/tv/${id}/images?api_key=${this.apiKey}`);
  }
  getTvShowsCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseurl}/tv/${id}/credits?api_key=${this.apiKey}`);
  }

  getSimilarTvShows(id: string) {
    return this.http
      .get<TvShowsDto>(`${this.baseurl}/tv/${id}/similar?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 4));
        })
      );
  }

  getTvShowsGenres() {
    return this.http
      .get<MovieGenreDto>(`${this.baseurl}/genre/tv/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }

  getTvShowsByGenre(genreId: string, page: number = 1) {
    return this.http
      .get<TvShowsDto>(
        `${this.baseurl}/discover/tv?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
