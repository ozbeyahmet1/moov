import { GetStaticProps } from 'next';
import Image from 'next/image';
import { Category } from '../interfaces/category';
import { Movie } from '../interfaces/movie';
import {
  categoriesEndpoint,
  getCategoriesData,
  getMoviesData,
  movieEndpoints,
} from '../utils';

interface MoviesPageProps {
  readonly trendingMovies: ReadonlyArray<Movie>;
  readonly topRatedMovies: ReadonlyArray<Movie>;
  readonly netflixOriginals: ReadonlyArray<Movie>;
  readonly categories: ReadonlyArray<Category>;
}

export const getStaticProps: GetStaticProps<MoviesPageProps> = async () => {
  try {
    const [trendingMovies, topRatedMovies, netflixOriginals, categories] =
      await Promise.all([
        getMoviesData(movieEndpoints.trending),
        getMoviesData(movieEndpoints.trending),
        getMoviesData(movieEndpoints.netflixOriginals),
        getCategoriesData(categoriesEndpoint),
      ]);
    return {
      props: {
        trendingMovies,
        topRatedMovies,
        netflixOriginals,
        categories,
      },
      revalidate: 60 * 60 * 24, // Revalidate every 24 hours
    };
  } catch (error) {
    console.error('Failed to fetch movie data:', error);
    return {
      notFound: true,
    };
  }
};

const MoviesPage = ({ trendingMovies, categories }: MoviesPageProps) => {
  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="grid grid-cols-4">
        {trendingMovies?.map((movie) => (
          <div key={movie.id}>
            {/* <h2>{movie.title}</h2>
          <p>{movie.overview}</p> */}
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              width={320}
              height={400}
            />
          </div>
        ))}
      </div>
      <div>
        {categories.map((category) => {
          return (
            <h3 className="bg-red-500" key={category.id}>
              {category.name}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesPage;
