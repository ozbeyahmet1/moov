import axios, { AxiosError, AxiosResponse } from "axios";
import { Genre } from "./interfaces/genre";
import { Movie } from "./interfaces/movie";
import { Video } from "./interfaces/video";

export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_API_KEY = process.env.NEXT_TMDB_API_KEY;
export const TMBD_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/w500/";
if (!TMDB_API_KEY) {
  throw new Error("TMDB API key not found in environment variables.");
}
export const TMDB_VIDEO_ENDPOINT = "https://www.youtube.com/watch?v=";
//Movie Endpoints
export const movieEndpoints = {
  topRated: `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  popular: `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US`,
};

// Defining the endpoint for getting the list of categories
export const categoriesEndpoint = `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`;

// Functions to generate endpoints for getting a single movie and similar movies
export const movieByIdEndpoint = (movieId: string) =>
  `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`;

export const similarMoviesByIdEndpoint = (movieId: string) =>
  `${TMDB_BASE_URL}/movie/${movieId}/similar?api_key=${TMDB_API_KEY}&language=en-US`;

// Function to generate an endpoint for searching movies by query and page number
export const movieBySearchResult = (query: string, page: string) =>
  `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${page}`;

// Function to generate an endpoint for getting movies by category
export const movieByCategory = (category: string) =>
  `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${category}&with_watch_monetization_types=flatrate`;

export const trailerByMovieIdEndpoint = (movieId: string) =>
  `${TMDB_BASE_URL}/movie/${movieId}/videos?api_key=${TMDB_API_KEY}`;

// Defining an async function to fetch data from the provided endpoint and returning the desired response key
export async function getData<T>(endpoint: string, responseKey: string): Promise<T[]> {
  try {
    const res: AxiosResponse<{ [key: string]: T[] }> = await axios.get(endpoint);
    return res.data[responseKey];
  } catch (error: AxiosError | unknown) {
    console.log((error as AxiosError).message);
    return [];
  }
}

// Defining an async function to fetch a single data item from the provided endpoint
export async function getSingleData<T>(endpoint: string): Promise<T> {
  try {
    const res: AxiosResponse<T> = await axios.get(endpoint);
    return res.data;
  } catch (error: AxiosError | unknown) {
    console.log((error as AxiosError).message);
    return null as unknown as T;
  }
}

// Functions to fetch data for movies and categories
export const getCategoriesData = (endpoint: string) => getData<Genre>(endpoint, "genres");

export const getMoviesData = (endpoint: string) => getData<Movie>(endpoint, "results");

export const getSingleMovieData = (endpoint: string) => getSingleData<Movie>(endpoint);

export const getTrailer = (endpoint: string) => getData<Video>(endpoint, "results");
// Functions to fetch total pages and total results for a movie list
export const getTotalPages = (endpoint: string) => getData<Movie>(endpoint, "total_pages");

export const getTotalResults = (endpoint: string) => getData<Movie>(endpoint, "total_results");

export const noImageUrl =
  "https://res.cloudinary.com/droheqpxn/image/upload/v1682138301/movie-app/660px-No-Image-Placeholder.svg_ooq33f.png";

export type PropsWithMovies<P = unknown> = P & {
  readonly movies: ReadonlyArray<Movie> | undefined;
};

export type PropsWithMovie<P = unknown> = P & {
  readonly movie: Movie | undefined;
};

export type MovieCardType = Pick<Movie, "id" | "title" | "poster_path"> | undefined;

export type PropsWithMovieCards<P = unknown> = P & {
  readonly movies: ReadonlyArray<MovieCardType> | undefined;
};

export type PropsWithMovieCard<P = unknown> = P & {
  readonly movie: MovieCardType;
};

export type PropsWithMovieGenre<P = unknown> = P & {
  readonly category: Genre | undefined;
};

export type PropsWithMovieGenres<P = unknown> = P & {
  readonly categories: ReadonlyArray<Genre> | undefined;
};

export const convertMinutesToHoursAndMinutes = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const hoursString = hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""}` : "";
  const minutesString = remainingMinutes > 0 ? `${remainingMinutes} min${remainingMinutes > 1 ? "s" : ""}` : "";
  const separator = hoursString && minutesString ? " " : "";
  return `${hoursString}${separator}${minutesString}`;
};

export const roundToOneDecimal = (num: number): number => {
  const roundedNum = Math.ceil(num * 10) / 10;
  const result = parseFloat(roundedNum.toFixed(1));
  return result;
};
