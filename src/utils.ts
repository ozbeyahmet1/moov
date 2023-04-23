import axios, { AxiosError, AxiosResponse } from 'axios';
import { Genre } from './interfaces/genre';
import { Movie } from './interfaces/movie';

export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_API_KEY = process.env.NEXT_TMDB_API_KEY;
export const TMBD_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500/';
if (!TMDB_API_KEY) {
  throw new Error('TMDB API key not found in environment variables.');
}

export const movieEndpoints = {
  topRated: `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  popular: `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US`,
  action: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=28`,
  comedy: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=35`,
  horror: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=27`,
  romance: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=10749`,
  documentaries: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=99`,
};

// Defining the endpoint for getting the list of categories
export const categoriesEndpoint = `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`;

// Defining an async function to fetch data from the provided endpoint and returning the desired response key
export async function getData<T>(
  endpoint: string,
  responseKey: string
): Promise<T[]> {
  try {
    const res: AxiosResponse<{ [key: string]: T[] }> = await axios.get(
      endpoint
    );
    return res.data[responseKey];
  } catch (error: AxiosError | unknown) {
    console.log((error as AxiosError).message);
    return [];
  }
}

export const getCategoriesData = (endpoint: string) =>
  getData<Genre>(endpoint, 'genres');

export const getMoviesData = (endpoint: string) =>
  getData<Movie>(endpoint, 'results');

export const getTotalPages = (endpoint: string) =>
  getData<Movie>(endpoint, 'total_pages');

export const getTotalResults = (endpoint: string) =>
  getData<Movie>(endpoint, 'total_results');

export const movieByIdEndpoint = (movieId: string) =>
  `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`;

export const movieBySearchResult = (query: string, page: string) =>
  `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${page}`;

export const noImageUrl =
  'https://res.cloudinary.com/droheqpxn/image/upload/v1682138301/movie-app/660px-No-Image-Placeholder.svg_ooq33f.png';

export type PropsWithMovie<P = unknown> = P & {
  movies?: ReadonlyArray<Movie> | undefined;
};
