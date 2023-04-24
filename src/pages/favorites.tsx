import { MovieCard } from "@/components/cards/movieCard/movieCard";
import { CardSize } from "@/interfaces/movieCard";
import { useMovieContext } from "@/providers/movieProvider";

const FavoritesPage = () => {
  const { favorites, addFavorite, removeFavorite, movies } = useMovieContext();
  return (
    <div className="container mt-32 flex  flex-col items-center px-0 pb-10">
      <div className="grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        {movies && movies.length > 0 ? (
          movies.map((movie, i) => {
            return <MovieCard key={i} index={i} movie={movie} size={CardSize.LG} />;
          })
        ) : (
          <p className="text-white">We couldn&apos;t find a match for</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
