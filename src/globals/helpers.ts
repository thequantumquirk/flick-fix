export function extractMovieData(movie) {
  return {
    title: movie.title,
    poster: movie.poster_path,
    price: movie.vote_average,
  };
}
