import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Movies } from './pages/movies/movies';
import { MovieComponent } from './pages/movie/movie';
import { Genres } from './pages/genres/genres';
import { TvShows } from './pages/tvshows/tvshows';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    // add rout to movies page
    path: 'movies',
    component: Movies,
  },
  {
    path: 'tvshows',
    component: TvShows,
  },
  {
    // add rout to movie detail page
    path: 'movie/:id',
    component: MovieComponent,
  },
  {
    // add route to genres page
    path: 'genres',
    component: Genres,
  },
  {
    // add rout to movies page
    path: 'movies/genre/:generId',
    component: Movies,
  },
  {
    // always be the end of the route to redirect to home page if error route comes
    path: '**',
    redirectTo: '',
  },
];
