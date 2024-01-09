import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import CartDetails from "./CartDetails";

export default function HeaderSection() {
  return (
    <nav className="sticky top-8 flex px-8 py-2 m-8 rounded-xl border items-center justify-between w-full bg-background/50 backdrop-blur-md z-50">
      <div className="flex gap-1 items-center">
        <h1 className="font-bold text-2xl">FLICKFIX</h1>
      </div>
      <div className="flex justify-evenly items-center gap-8">
        <button
          onClick={() => {
            const anchor = document.querySelector("#popular");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Popular Movies
        </button>
        <button
          onClick={() => {
            const anchor = document.querySelector("#top");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Top Rated Movies
        </button>
        <Popover>
          <PopoverTrigger asChild>
            <Button>
              <ShoppingCart />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <CartDetails />
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
