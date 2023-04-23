import { GetStaticProps } from 'next';
import { HeroSection } from '../components/sections/heroSection';
import { PopularMoviesSection } from '../components/sections/popularMoviesSection';
import { Genre } from '../interfaces/genre';
import { Movie } from '../interfaces/movie';
import {
  categoriesEndpoint,
  getCategoriesData,
  getMoviesData,
  movieEndpoints,
} from '../utils';

interface MoviesPageProps {
  readonly topRatedMovies: ReadonlyArray<Movie>;
  readonly popularMovies: ReadonlyArray<Movie>;
  readonly categories: ReadonlyArray<Genre>;
}

export const getStaticProps: GetStaticProps<MoviesPageProps> = async () => {
  try {
    const [topRatedMovies, popularMovies, categories] = await Promise.all([
      getMoviesData(movieEndpoints.topRated),
      getMoviesData(movieEndpoints.popular),
      getCategoriesData(categoriesEndpoint),
    ]);
    return {
      props: {
        topRatedMovies,
        popularMovies,
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

const MoviesPage = ({
  topRatedMovies,
  popularMovies,
  categories,
}: MoviesPageProps) => {
  return (
    <div className="pb-10">
      <HeroSection
        imageSource="https://res.cloudinary.com/droheqpxn/image/upload/v1681912683/movie-app/backgroundv3_fiu2ju.png"
        font="mandalore text-8xl"
        description="The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic."
        categories={[{ id: 18, name: 'Drama' }]}
        movieName="Mandalorian"
      />

      <PopularMoviesSection movies={popularMovies} />

      <div className="  bg-darkBlue px-0 py-5">
        <div className="container grid grid-cols-10 gap-x-2 gap-y-2 p-0">
          {categories.map((category) => {
            return (
              <h3 className="h-32 w-32 bg-blue" key={category.id}>
                {category.name}
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
