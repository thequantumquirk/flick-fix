"use client";
import HeaderSection from "@/components/HeaderSection";
import PopularMovies from "@/components/PopularMovies";
import TopRatedMovies from "@/components/TopRatedMovies";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center sm:px-8 px-2">
        <HeaderSection />
        <PopularMovies />
        <TopRatedMovies />
      </main>
    </QueryClientProvider>
  );
}
