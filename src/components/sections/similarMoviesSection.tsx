import { CardSize } from "@/interfaces/movieCard";
import { PropsWithMovieCards } from "@/utils";
import { MovieCard } from "../cards/movieCard/movieCard";

export const SimilarMoviesSection = ({ movies }: PropsWithMovieCards) => {
  return (
    <section id="features" className="hide-scroll-bar z-50  flex overflow-x-scroll bg-blue">
      <div className="flex flex-nowrap gap-1 px-0 py-4" id="my-scrollable-div">
        {movies?.map((movie, i) => (
          <MovieCard index={i} movie={movie} size={CardSize.MD} key={i} />
        ))}
      </div>
    </section>
  );
};
