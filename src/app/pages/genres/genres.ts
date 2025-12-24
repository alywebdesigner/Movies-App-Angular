import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genre';
import { MoviesService } from '../../services/movies';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-genres',
  imports: [NgFor, RouterLink],
  templateUrl: './genres.html',
  styleUrl: './genres.scss',
})
export class Genres implements OnInit {
  genres: Genre[] = [];
  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.moviesService.getMoviesGenres().subscribe((genresdata) => {
      this.genres = genresdata;
      console.log(this.genres);
    });
  }
}
