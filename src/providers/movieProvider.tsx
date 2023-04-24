// Importing necessary interfaces and utility functions
import { Movie } from "@/interfaces/movie";
import { getSingleMovieData, movieByIdEndpoint } from "@/utils";

// Importing necessary modules from the React library
import { useRouter } from "next/router";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

// Defining the shape of the MovieContext object
interface MovieContextProps {
  readonly movies: ReadonlyArray<Movie>;
  favorites: number[];
  addFavorite: (id: number) => Promise<void>;
  removeFavorite: (id: number) => void;
}

// Creating a new context object with an initial value
const MovieContext = createContext<MovieContextProps>({
  movies: [],
  favorites: [],
  addFavorite: async (id: number) => {
    // addFavorite function implementation
  },
  removeFavorite: () => null,
});

export const useMovieContext = () => useContext(MovieContext);

const MovieProvider = ({ children }: PropsWithChildren) => {
  const [movies, setMovies] = useState<ReadonlyArray<Movie>>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const router = useRouter();

  // Defining helper functions to fetch favorites and movies data from local storage
  const fetchFavorites = () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (!storedFavorites) {
      return;
    }
    const parsedFavorites = JSON.parse(storedFavorites) as number[];
    setFavorites(parsedFavorites);
  };

  const fetchMovies = () => {
    const storedMovies = localStorage.getItem("movies");
    if (!storedMovies) {
      return;
    }
    const parsedMovies = JSON.parse(storedMovies) as Movie[];
    setMovies(parsedMovies);
  };

  // Using the useEffect hook to fetch favorites and movies data whenever the route changes
  useEffect(() => {
    fetchFavorites();
    fetchMovies();
  }, [router]);

  // Defining functions to add and remove movies from favorites
  const addFavorite = async (id: number) => {
    if (favorites.includes(id)) return;
    setFavorites([...favorites, id]);
    try {
      const movieData = await getSingleMovieData(movieByIdEndpoint(id.toString()));
      const updatedMovies = [...movies, movieData];
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
    } catch (error) {
      console.error(error);
    }
    localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
  };

  const removeFavorite = (id: number) => {
    const newFavorites = favorites.filter((fav) => fav !== id);
    setFavorites(newFavorites);
    try {
      const updatedMovies = movies.filter((movie) => movie.id !== id);
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
    } catch (error) {
      console.error(error);
    }
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  // Creating a new object to hold the MovieContext data
  const values: MovieContextProps = {
    movies,
    favorites,
    addFavorite,
    removeFavorite,
  };

  return <MovieContext.Provider value={values}>{children}</MovieContext.Provider>;
};

export default MovieProvider;
