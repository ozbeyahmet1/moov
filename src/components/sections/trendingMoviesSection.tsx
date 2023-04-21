import { Movie } from '@/interfaces/movie';
import { MovieCard } from '../cards/movieCardLg/movieCardLg';

interface Props {
  readonly movies: ReadonlyArray<Movie>;
}

export const TrendingMoviesSection = ({ movies }: Props) => {
  return (
    <section
      id="features"
      className="hide-scroll-bar z-50 -mt-32 flex overflow-x-scroll bg-blue"
    >
      <div className="flex flex-nowrap gap-3 p-8" id="my-scrollable-div">
        {movies?.map((movie, i) => (
          <MovieCard
            id={i}
            movieId={movie.id}
            key={movie.id}
            banner_src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </section>
  );
};
