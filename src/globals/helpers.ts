import { Movie } from "@/types/MovieType";

export function extractMovieData(movie: Movie) {
  return {
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
    price: movie.vote_average,
  };
}
