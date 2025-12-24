import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies';

import { Slider } from '../../components/slider/slider';
import { ItemsCards } from '../../components/itemscards/itemscards';
import { Movie } from '../../models/movie';
@Component({
  selector: 'app-home',
  imports: [Slider, ItemsCards],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  nowplaying: Movie[] = [];
  constructor(private moviesservice: MoviesService) {}
  ngOnInit(): void {
    this.moviesservice.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.moviesservice.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
    this.moviesservice.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
    this.moviesservice.getMovies('now_playing').subscribe((movies) => {
      this.nowplaying = movies;
    });
  }
}
