import { useWindowSize } from "@/hooks/useWindowSize";
import { CardSize } from "@/interfaces/movieCard";
import { PropsWithMovieCards } from "@/utils";
import { MovieCard } from "../cards/movieCard/movieCard";

export const TopRatedMoviesSection = ({ movies }: PropsWithMovieCards) => {
  const [isXs] = useWindowSize();
  return (
    <section id="topRated" className="container justify-center bg-blue py-5 md:py-10 lg:px-0">
      <h2 className="container mb-4 p-0 text-xl font-bold text-white">The bests of history</h2>
      <div className="grid grid-cols-2 gap-x-2 gap-y-3 sm:grid-cols-3  md:grid-cols-3 md:gap-x-12 md:gap-y-12 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        {movies?.map((movie, i) => (
          <MovieCard key={i} index={i} movie={movie} size={isXs ? CardSize.SM : CardSize.LG} />
        ))}
      </div>
    </section>
  );
};
