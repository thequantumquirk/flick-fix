import { useMovieStore } from "@/store/useMovieStore";
import { Button } from "./ui/button";
import Image from "next/image";
import { imgUrl } from "@/globals/constants";
import { XCircle } from "lucide-react";

export default function CartDetails() {
  const { movies, removeMovies } = useMovieStore();

  let totalValue = movies.reduce((total, movie) => total + movie.price, 0);
  return (
    <div>
      {movies.length !== 0 ? (
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1 max-h-96 overflow-y-scroll">
            {movies.map((movie, id) => (
              <div
                key={id}
                className="flex items-center gap-2 bg-foreground/10 p-2 rounded-lg"
              >
                <Image
                  src={`${imgUrl + movie.poster}`}
                  alt="Movie Image"
                  width={70}
                  height={20}
                  className="rounded-lg"
                />
                <div>
                  <h1 className="font-bold">{movie.title}</h1>
                  <p>
                    <span>Price: </span>${movie.price}
                  </p>
                </div>
                <button onClick={() => removeMovies(movie.id)}>
                  <XCircle />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold">
              Total:{" "}
              <span className="font-normal">${totalValue.toFixed(2)}</span>
            </p>
            <Button>Checkout</Button>
          </div>
        </div>
      ) : (
        <p>Your Cart is Empty</p>
      )}
    </div>
  );
}
