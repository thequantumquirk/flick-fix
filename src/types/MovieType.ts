export type Movie = {
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
};

export type GenreType = {
  id: number;
  name: string;
};

export type ProductionCompanyType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type LanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type CartMovieType = {
  id: number;
  title: string;
  poster: string;
  price: number;
};
