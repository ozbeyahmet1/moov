import { CardSize } from "@/interfaces/movieCard";
import { PropsWithMovieCards } from "@/utils";
import { MovieCard } from "../cards/movieCard/movieCard";

export const PopularMoviesSection = ({ movies }: PropsWithMovieCards) => {
  return (
    <section
      id="features"
      className="hide-scroll-bar z-50 -mt-20 flex overflow-x-scroll bg-blue pb-4 pt-0 md:-mt-28 md:pb-8"
    >
      <div className="flex flex-nowrap gap-3 gap-y-6  px-3  py-12 md:px-12 md:py-12" id="my-scrollable-div">
        {movies?.map((movie, i) => (
          <MovieCard index={i} movie={movie} size={CardSize.LG} key={i} />
        ))}
      </div>
    </section>
  );
};
