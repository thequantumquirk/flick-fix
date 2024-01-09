import { baseUrl } from "@/globals/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Movie } from "@/types/MovieType";

export default function TopRatedMovies() {
  const { data: topRatedMoviesQuery, isLoading } = useQuery({
    queryKey: ["top-rated-movies"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${baseUrl}movie/top_rated?language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGY0YmMxZjQ2YzgwMGUyODlhZDczZDNiMGMwMzAzOCIsInN1YiI6IjY1OWQyMmUzY2E0ZjY3MDE0YmE4YTgwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0FxMAc0418tiTLstHEeLJM-_Q98hxzC9kCE0SD6cFw",
          },
        }
      );
      return data.results as Movie[];
    },
  });
  return (
    <div className="flex flex-col gap-2 my-2 mt-16 snap-start">
      <h1 className="text-4xl font-bold text-center" id="top">
        Top-Rated Movies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {topRatedMoviesQuery &&
          topRatedMoviesQuery.map((movie: Movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
}
