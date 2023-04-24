import { MovieCard } from "@/components/cards/movieCard/movieCard";
import { CardSize } from "@/interfaces/movieCard";
import { PropsWithMovieCards, getMoviesData, movieByCategory } from "@/utils";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface SearchPageParams extends ParsedUrlQuery {
  readonly categoryId: string;
}

interface Props {
  readonly query: string;
}

export const getServerSideProps: GetServerSideProps<PropsWithMovieCards, SearchPageParams> = async (
  context: GetServerSidePropsContext<SearchPageParams>,
) => {
  const query = context.params?.categoryId as string;
  const endpoint = movieByCategory(query);
  const movies = await getMoviesData(endpoint);

  return {
    props: {
      movies,
    },
  };
};

const Search = ({ movies }: PropsWithMovieCards<Props>) => {
  return (
    <div className="container mt-32 flex  flex-col items-center px-0 pb-10">
      {movies && movies.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
          {movies.map((movie, i) => {
            return <MovieCard index={i} movie={movie} size={CardSize.LG} key={i} />;
          })}
        </div>
      ) : (
        <p className="text-white">
          {/* We couldn&apos;t find a match for <b>&ldquo;{query}&ldquo;</b> . Please try another search */}
        </p>
      )}
    </div>
  );
};

export default Search;
