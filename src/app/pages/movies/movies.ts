import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies';
import { Movie, MovieDto } from '../../models/movie';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../../components/item/item';
import { Observable, take } from 'rxjs';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ActivatedRoute } from '@angular/router';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-movies',
  imports: [
    CommonModule,
    FormsModule,
    Item,
    PaginatorModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
  ],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies implements OnInit {
  movies: Movie[] = [];
  genreId: string | null = null;
  currentPage: number = 1;
  totalRecords: number = 120;
  searchValue: string | null = null;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ generId }) => {
      if (generId) {
        this.genreId = generId;
        this.getMoviesByGenre(generId, 1);
      } else {
        this.paginate({ page: 0 });
      }
    });
  }

  first: number = 0;
  rows: number = 10;

  paginate(event: PaginatorState | any, searchkeyvalue?: string) {
    console.log('Pagination event:', event);
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else {
      this.moviesService
        .searchMovies(pageNumber, searchkeyvalue || this.searchValue || undefined)
        .subscribe((movies) => {
          this.movies = movies;
        });
    }
  }

  getMoviesByGenre(genreId: string, page: number = 1) {
    this.moviesService.getMovieByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
      console.log('Movies by genre (page ' + page + '):', this.movies);
    });
  }

  searchChanged() {
    console.log(this.searchValue);
    this.first = 0; // Reset to first page
    this.paginate({ page: 0 }, this.searchValue || undefined);
  }
}
