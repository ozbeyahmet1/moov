import { CardSize } from "@/interfaces/movieCard";
import { PropsWithMovieCards } from "@/utils";
import { MovieCard } from "../cards/movieCard/movieCard";

export const TopRatedMoviesSection = ({ movies }: PropsWithMovieCards) => {
  return (
    <section id="topRated" className=" container bg-blue px-0 py-10">
      <h2 className="container mb-4 p-0 text-xl font-bold text-white">The bests of history</h2>
      <div className="grid grid-cols-5 gap-y-20">
        {movies?.map((movie, i) => (
          <MovieCard key={i} index={i} movie={movie} size={CardSize.LG} />
        ))}
      </div>
    </section>
  );
};
