import { Pagination } from '@/components/ui/pagination';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { MovieCard } from '../components/cards/movieCardLg/movieCardLg';
import {
  PropsWithMovie,
  getMoviesData,
  getTotalPages,
  getTotalResults,
  movieBySearchResult,
} from '../utils';

interface SearchPageParams extends ParsedUrlQuery {
  readonly query: string;
  readonly page: string;
}

interface Props {
  readonly total_results: number;
  readonly total_pages: number;
  readonly page: string;
}

export const getServerSideProps: GetServerSideProps<
  PropsWithMovie,
  SearchPageParams
> = async (context: GetServerSidePropsContext<SearchPageParams>) => {
  const query = context.query?.query as string;
  const page = context.query?.page as string;
  const endpoint = movieBySearchResult(query, page);
  const total_results = await getTotalResults(
    `https://api.themoviedb.org/3/search/movie?api_key=54bd0769d35f446d8fa8bd72f04bb8f4&query=${query}`
  );
  const total_pages = await getTotalPages(
    `https://api.themoviedb.org/3/search/movie?api_key=54bd0769d35f446d8fa8bd72f04bb8f4&query=${query}`
  );
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

const Search = ({
  movies,
  total_results,
  total_pages,
  page,
}: PropsWithMovie<Props>) => {
  const router = useRouter();
  const { query } = router.query;
  console.log(total_results, total_pages);

  return (
    <div className="container mt-32 px-0  pb-10">
      <div className="relative  mb-12 w-full">
        <div>
          <Pagination
            current_page={Number(page)}
            element_number={6}
            total_page={total_pages}
            query={router.query?.query as string}
          />
        </div>
      </div>

      {movies && movies.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
          {movies.map((movie, i) => {
            return <MovieCard key={i} index={i / 10} movie={movie} />;
          })}
        </div>
      ) : (
        <p className="text-white">
          We couldn&apos;t find a match for <b>&ldquo;{query}&ldquo;</b> .
          Please try another search
        </p>
      )}
    </div>
  );
};

export default Search;
