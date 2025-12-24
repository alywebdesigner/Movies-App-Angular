import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies';
import { Movie, MovieVideo, MovieImages, MovieCredits } from '../../models/movie';
import { first, Observable } from 'rxjs';
import { NgIf } from '@angular/common';
import { Slider } from '../../components/slider/slider';
import { PaginatorModule } from 'primeng/paginator';
import { TabsModule } from 'primeng/tabs';
import { IMAGE_SIZES } from '../../constants/images-sizes';
import { DatePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { VideoEmbed } from '../../components/video-embed/video-embed';
import { Image } from 'primeng/image'; // add this import
import { CarouselModule } from 'primeng/carousel';
import { ItemsCards } from '../../components/itemscards/itemscards';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.html',
  styleUrl: './movie.scss',
  imports: [
    NgIf,
    NgFor,
    Slider,
    PaginatorModule,
    TabsModule,
    DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    VideoEmbed,
    Image,
    CarouselModule,
    ItemsCards,
  ],
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  imagessizes = IMAGE_SIZES;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null | undefined; // define movieImages array
  movieCredits: MovieCredits | null = null;
  similarMovies: Movie[] = [];
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {} // fix service type

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getSimilarMovies(id);
    });
  }
  ngOnDestroy(): void {
    console.log('MovieComponent destroyed');
  }
  getMovie(id: string): void {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
      console.log(this.movie);
    });
  }
  getMovieVideos(id: string): void {
    this.moviesService.getMovieVideos(id).subscribe((videosData) => {
      this.movieVideos = videosData;
      console.log(this.movieVideos);
    });
  }
  getMovieImages(id: string): void {
    this.moviesService.getMovieImages(id).subscribe((imagesData) => {
      this.movieImages = imagesData;
      console.log(this.movieImages);
    });
  }
  getMovieCredits(id: string): void {
    this.moviesService.getMovieCredits(id).subscribe((creditsData) => {
      this.movieCredits = creditsData;
      console.log(this.movieCredits);
    });
  }

  getSimilarMovies(id: string): void {
    this.moviesService.getSimilarMovies(id).subscribe((similarData) => {
      this.similarMovies = similarData;
      console.log(this.similarMovies);
    });
  }
}
