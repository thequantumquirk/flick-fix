import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface MovieStore {
  movies: any[];
  addMovies: (movie: any) => void;
}

export const useMovieStore = create(
  persist<MovieStore>(
    (set, get) => ({
      movies: [],
      addMovies: (movie: any) =>
        set((state) => ({ movies: [...state.movies, movie] })),
      removeMovies: (id: number) =>
        set((state) => ({
          movies: state.movies.filter((movie) => movie.id !== id),
        })),
    }),
    {
      name: "movies-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
