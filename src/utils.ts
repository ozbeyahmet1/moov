import axios, { AxiosError, AxiosResponse } from 'axios';
import { Category } from './interfaces/category';
import { Movie } from './interfaces/movie';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.NEXT_TMDB_API_KEY;

if (!TMDB_API_KEY) {
  throw new Error('TMDB API key not found in environment variables.');
}

export const movieEndpoints = {
  trending: `${TMDB_BASE_URL}/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
  netflixOriginals: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_networks=213`,
  topRated: `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  action: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=28`,
  comedy: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=35`,
  horror: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=27`,
  romance: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=10749`,
  documentaries: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=99`,
};

// Defining the endpoint for getting the list of categories
export const categoriesEndpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`;

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
  getData<Category>(endpoint, 'genres');
export const getMoviesData = (endpoint: string) =>
  getData<Movie>(endpoint, 'results');
