import { CardSize } from "@/interfaces/movieCard";
import { PropsWithMovieCards } from "@/utils";
import { MovieCard } from "../cards/movieCard/movieCard";

export const PopularMoviesSection = ({ movies }: PropsWithMovieCards) => {
  return (
    <section id="features" className="hide-scroll-bar z-50 -mt-32 flex overflow-x-scroll bg-blue pb-16 pt-0">
      <div className="flex flex-nowrap gap-3 gap-y-6 px-12 py-12" id="my-scrollable-div">
        {movies?.map((movie, i) => (
          <MovieCard index={i} movie={movie} size={CardSize.LG} key={i} />
        ))}
      </div>
    </section>
  );
};
