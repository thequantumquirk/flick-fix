export function extractMovieData(movie) {
  return {
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
    price: movie.vote_average,
  };
}
