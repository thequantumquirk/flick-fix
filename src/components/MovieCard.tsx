import {
  GenreType,
  LanguageType,
  Movie,
  ProductionCompanyType,
} from "@/types/MovieType";
import { Card, CardContent } from "./ui/card";
import { baseUrl, imgUrl } from "@/globals/constants";
import Image from "next/image";
import RatingScale from "./RatingScale";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { useMovieStore } from "@/store/useMovieStore";
import { extractMovieData } from "@/globals/helpers";

function MovieDialog({ movieId }: { movieId: number }) {
  const { movies, addMovies } = useMovieStore();
  const addToCart = (movie: Movie) => {
    addMovies(extractMovieData(movie));
  };
  const { data: movie, isLoading } = useQuery({
    queryKey: ["movie-detail"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${baseUrl}movie/${movieId}?language=en-US`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_KEY}`,
          },
        }
      );
      return data;
    },
  });
  return (
    movie && (
      <div className="relative rounded-lg">
        <div className="absolute w-full h-72 rounded-lg blur-sm -z-10">
          <Image
            src={`${imgUrl + movie.backdrop_path}`}
            fill
            alt="Movie Backdrop"
          />
        </div>
        <Image
          src={`${imgUrl + movie.poster_path}`}
          alt="Movie Image"
          width={200}
          height={400}
          className="mx-auto mt-16 rounded-lg"
        />
        <section className="p-2 flex flex-col gap-2 overflow-y-scroll">
          <div>
            <h2 className="text-2xl font-bold">{movie.title}</h2>
          </div>
          <p>
            <span className="font-bold">Rental Price: </span>${" "}
            {movie.vote_average.toFixed(1)}
          </p>
          <div className="flex gap-1 flex-wrap">
            <span className="font-bold">Genres: </span>
            {movie.genres.map((genre: GenreType) => (
              <span key={genre.id}>
                <Badge>{genre.name}</Badge>
              </span>
            ))}
          </div>
          <p>
            <span className="font-bold">Languages: </span>
            {movie.spoken_languages.map(
              (language: LanguageType, id: number) => (
                <span key={id}>{language.english_name}</span>
              )
            )}
          </p>
          <p>
            <span className="font-bold">Rating:</span>
            <span className="flex gap-1">
              <RatingScale ratingPercent={movie.vote_average} /> (
              {movie.vote_average.toFixed(2)})
            </span>
          </p>
          <p>
            <span className="font-bold">Overview:</span> <br /> {movie.overview}
          </p>
          <div className="flex gap-1">
            <span className="font-bold">Produced By: </span>
            {movie.production_companies.map((comp: ProductionCompanyType) => (
              <p key={comp.id}>
                {comp.name}
                {movie.production_companies.indexOf(comp) !==
                movie.production_companies.length - 1
                  ? ","
                  : ""}
              </p>
            ))}
          </div>
          <p className="flex gap-1 items-center">
            <span className="font-bold">More Info on:</span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`}>
              <svg
                id="home_img"
                className="ipc-logo"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="32"
                viewBox="0 0 64 32"
                version="1.1"
              >
                <g fill="#F5C518">
                  <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>
                </g>
                <g
                  transform="translate(8.000000, 7.000000)"
                  fill="#000000"
                  fill-rule="nonzero"
                >
                  <polygon points="0 18 5 18 5 0 0 0"></polygon>
                  <path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>
                  <path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>
                  <path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>
                </g>
              </svg>
            </a>
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex gap-1 font-semibold">
                <ShoppingBag /> Rent Now
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>Confirm Rental</DialogHeader>
              <DialogDescription>
                Do you want to Rent{" "}
                <span className="font-bold">{movie.title}</span> for $
                {movie.vote_average.toFixed(1)}/month?
              </DialogDescription>
              <DialogFooter>
                <DialogClose>
                  <Button variant={"secondary"}>No</Button>
                </DialogClose>
                <DialogClose>
                  <Button onClick={() => addToCart(movie)}>Yes</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>
      </div>
    )
  );
}

export default function MovieCard({ movie }: { movie: Movie }) {
  const { movies, addMovies } = useMovieStore();
  const addToCart = (movie: Movie) => {
    addMovies(extractMovieData(movie));
  };
  return (
    <Card>
      <CardContent className="p-0 max-w-sm">
        <Dialog>
          <DialogTrigger>
            <div className="relative w-full rounded-lg h-64">
              <Image
                src={`${imgUrl + movie.backdrop_path}`}
                alt={`${movie.title} Image`}
                className="rounded-t-lg"
                fill
              />
              {movie.adult ? (
                <span className="absolute bg-white p-1 rounded-full bottom-2 right-2">
                  <Image
                    src={"/adult.svg"}
                    width={20}
                    height={20}
                    alt="adult indicator"
                  />
                </span>
              ) : null}
            </div>
            <section className="p-2 flex flex-col gap-2 text-left">
              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                  <h2 className="text-2xl font-bold line-clamp-1">
                    {movie.title}
                  </h2>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <RatingScale ratingPercent={movie.vote_average} />
                <p className="text-sm">Released on: {movie.release_date}</p>
              </div>
              <p className="text-sm line-clamp-3">{movie.overview}</p>
            </section>
          </DialogTrigger>
          <div className="flex justify-between items-center p-2">
            <p className="text-lg">
              Rent for:{" "}
              <span className="font-bold">
                ${movie.vote_average.toFixed(1)}/m
              </span>
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex gap-1 font-semibold">
                  <ShoppingBag /> Rent Now
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>Confirm Rental</DialogHeader>
                <DialogDescription>
                  Do you want to Rent{" "}
                  <span className="font-bold">{movie.title}</span> for $
                  {movie.vote_average.toFixed(1)}/month?
                </DialogDescription>
                <DialogFooter>
                  <DialogClose>
                    <Button variant={"secondary"}>No</Button>
                  </DialogClose>
                  <DialogClose>
                    <Button onClick={() => addToCart(movie)}>Yes</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <DialogContent className="p-0 max-h-[80vh] overflow-y-scroll">
            <MovieDialog movieId={movie.id} />
          </DialogContent>
        </Dialog>
        <Separator />
      </CardContent>
    </Card>
  );
}
