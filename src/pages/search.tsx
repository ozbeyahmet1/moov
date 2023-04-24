import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { MovieCard } from "../components/cards/movieCard/movieCard";
import { Pagination } from "../components/ui/pagination/pagination";
import { CardSize } from "../interfaces/movieCard";
import { PropsWithMovieCards, getMoviesData, getTotalPages, getTotalResults, movieBySearchResult } from "../utils";

interface SearchPageParams extends ParsedUrlQuery {
  readonly query: string;
  readonly page: string;
}

interface Props {
  readonly total_results: number;
  readonly total_pages: number;
  readonly page: string;
}

export const getServerSideProps: GetServerSideProps<PropsWithMovieCards, SearchPageParams> = async (
  context: GetServerSidePropsContext<SearchPageParams>,
) => {
  const query = context.query?.query as string;
  const page = context.query?.page as string;
  const endpoint = movieBySearchResult(query, page);
  const total_results = await getTotalResults(endpoint);
  const total_pages = await getTotalPages(endpoint);
  const movies = await getMoviesData(endpoint);

  return {
    props: {
      movies,
      total_results,
      total_pages,
      page,
    },
  };
};

const SearchPage = ({ movies, total_results, total_pages, page }: PropsWithMovieCards<Props>) => {
  const router = useRouter();
  const { query } = router.query;

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
          We couldn&apos;t find a match for <b>&ldquo;{query}&ldquo;</b> . Please try another search
        </p>
      )}
      <div className="relative  mb-12 mt-20 w-fit">
        <Pagination
          current_page={Number(page)}
          element_number={6}
          total_page={total_pages}
          query={router.query?.query as string}
        />
      </div>
    </div>
  );
};

export default SearchPage;
