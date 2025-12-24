export interface Movie {
  name: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: { id: number; name: string }[];
}
export interface MovieDto {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieVideoDto {
  results: MovieVideo[];
  id: number;
}
export interface MovieVideo {
  key: string;
  site: string;
}

export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}
export interface MovieCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}
export interface TvShowsDto {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
