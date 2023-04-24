import { MovieCard } from "@/components/cards/movieCard/movieCard";
import { CardSize } from "@/interfaces/movieCard";
import { useMovieContext } from "@/providers/movieProvider";

const FavoritesPage = () => {
  const { movies } = useMovieContext();
  return (
    <div className="container mt-32 flex  min-h-[60vh]  flex-col items-center px-0 pb-10">
      {movies && movies.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
          {movies.map((movie, i) => {
            return <MovieCard key={i} index={i} movie={movie} size={CardSize.LG} />;
          })}
        </div>
      ) : (
        <p className="p-2 text-white">
          There are no items in your favorites. Don&apos;t forget to click the heart button on the movie details page to
          add them.
        </p>
      )}
    </div>
  );
};

export default FavoritesPage;
