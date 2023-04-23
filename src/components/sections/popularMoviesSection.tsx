import { PropsWithMovie } from '@/utils';
import { MovieCard } from '../cards/movieCardLg/movieCardLg';

export const PopularMoviesSection = ({ movies }: PropsWithMovie) => {
  return (
    <section
      id="features"
      className="hide-scroll-bar z-50 -mt-32 flex overflow-x-scroll bg-blue"
    >
      <div className="flex flex-nowrap gap-3 px-12 py-8" id="my-scrollable-div">
        {movies?.map((movie, i) => (
          <MovieCard key={i} index={i} movie={movie} />
        ))}
      </div>
    </section>
  );
};
