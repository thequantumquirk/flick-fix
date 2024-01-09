"use client";

import { ShoppingCart } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import CartDetails from "./CartDetails";
import { Badge } from "./ui/badge";
import { useMovieStore } from "@/store/useMovieStore";

export default function HeaderSection() {
  const { movies } = useMovieStore();
  return (
    <nav className="sticky top-8 flex sm:px-8 p-2 py-2 m-8 rounded-xl border items-center justify-between w-full bg-background/50 backdrop-blur-md z-50">
      <div className="flex gap-1 items-center">
        <h1 className="font-bold sm:text-2xl">FLICKFIX</h1>
      </div>
      <div className="flex justify-evenly items-center sm:gap-8 gap-2">
        <button
          className="text-sm font-semibold sm:text-base"
          onClick={() => {
            const anchor = document.querySelector("#popular");
            anchor &&
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Popular
        </button>
        <button
          className="text-sm font-semibold sm:text-base"
          onClick={() => {
            const anchor = document.querySelector("#top");
            anchor &&
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Top Rated
        </button>
        <Popover>
          <PopoverTrigger>
            <div className="bg-primary cursor-pointer rounded-lg p-2 flex gap-1">
              <ShoppingCart className="text-white" />
              <Badge className="text-xs px-2" variant={"secondary"}>
                {movies.length}
              </Badge>
              <p className="sr-only">Cart</p>
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <CartDetails />
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
