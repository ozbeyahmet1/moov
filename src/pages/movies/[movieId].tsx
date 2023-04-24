import { SimilarMoviesSection } from "@/components/sections/similarMoviesSection";
import { Movie } from "@/interfaces/movie";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaImdb } from "react-icons/fa";
import { useMovieContext } from "../../providers/movieProvider";
import {
  PropsWithMovie,
  TMBD_IMAGE_ENDPOINT,
  convertMinutesToHoursAndMinutes,
  getMoviesData,
  getSingleMovieData,
  movieByIdEndpoint,
  noImageUrl,
  roundToOneDecimal,
  similarMoviesByIdEndpoint,
} from "../../utils";

interface SearchPageParams extends ParsedUrlQuery {
  readonly movieId: string;
}

interface Props {
  readonly similarMovies: ReadonlyArray<Movie>;
}

export const getServerSideProps: GetServerSideProps<PropsWithMovie, SearchPageParams> = async (
  context: GetServerSidePropsContext<SearchPageParams>,
) => {
  const query = context.params?.movieId as string;
  const endpoint = movieByIdEndpoint(query.toString());
  const similarMoviesEndpoint = similarMoviesByIdEndpoint(query.toString());
  const movie = await getSingleMovieData(endpoint);
  const similarMovies = await getMoviesData(similarMoviesEndpoint);
  return {
    props: {
      movie,
      similarMovies,
    },
  };
};

const MovieDetailsPage = ({ movie, similarMovies }: PropsWithMovie<Props>) => {
  const { favorites, addFavorite, removeFavorite } = useMovieContext();
  function FavoriteButton(movieId: number) {
    const handleClick = () => {
      if (isLiked) {
        void removeFavorite(movieId);
      } else {
        void addFavorite(movieId);
      }
    };

    return isLiked ? (
      <AiFillHeart className="cursor-pointer" onClick={handleClick} color="red" size={50} />
    ) : (
      <AiOutlineHeart className="cursor-pointer" onClick={handleClick} color="white" size={50} />
    );
  }

  const router = useRouter();
  const { movieId } = router.query;

  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    if (favorites.includes(Number(movieId))) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [favorites, movieId, router]);

  return (
    <div className="container  px-0 pb-10 md:mt-32">
      <div className="flex flex-col items-start md:flex-row ">
        <div className="w-full md:w-1/3">
          <Image
            src={movie?.poster_path ? TMBD_IMAGE_ENDPOINT + movie.poster_path : noImageUrl}
            alt=""
            width={400}
            height={1400}
            quality={100}
          />
        </div>

        <div className="mb:p-0 flex w-full flex-col p-6 pb-10 md:w-2/3">
          <div className=" items-start justify-between">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white md:text-4xl ">{movie?.title}</h3>
              {FavoriteButton(Number(movieId))}
            </div>
          </div>

          <div className=" my-2 flex gap-6 text-sm font-medium text-grey md:text-base">
            <p>{movie?.release_date.slice(0, 4)}</p>|
            {movie?.runtime && <p>{convertMinutesToHoursAndMinutes(movie?.runtime)}</p>} |
            <div className="flex items-center gap-2">
              <p>{movie?.vote_average && roundToOneDecimal(movie?.vote_average)}</p>
              <FaImdb color="#f3ce13" size={20} />
            </div>
          </div>
          <p className="text-white">{movie?.overview}</p>
          <div className="mt-4">
            <h3 className="text-lg font-bold text-white">Related Movies</h3>
            <SimilarMoviesSection movies={similarMovies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
