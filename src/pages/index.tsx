import { CategoriesSection } from "@/components/sections/categoriesSection";
import { TopRatedSection } from "@/components/sections/topRatedMoviesSection";
import { GetStaticProps } from "next";
import { HeroSection } from "../components/sections/heroSection";
import { PopularMoviesSection } from "../components/sections/popularMoviesSection";
import { Genre } from "../interfaces/genre";
import { Movie } from "../interfaces/movie";
import { categoriesEndpoint, getCategoriesData, getMoviesData, movieEndpoints } from "../utils";

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
    console.error("Failed to fetch movie data:", error);
    return {
      notFound: true,
    };
  }
};

const MoviesPage = ({ topRatedMovies, popularMovies, categories }: MoviesPageProps) => {
  return (
    <div className="pb-10">
      <HeroSection />
      <PopularMoviesSection movies={popularMovies} />
      <CategoriesSection categories={categories} />
      <TopRatedSection movies={topRatedMovies} />
    </div>
  );
};

export default MoviesPage;
