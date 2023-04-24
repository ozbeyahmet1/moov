import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CardSize } from "../../../interfaces/movieCard";
import { PropsWithMovieCard, TMBD_IMAGE_ENDPOINT, noImageUrl } from "../../../utils";

interface Props {
  readonly index: number;
  readonly size: CardSize;
}

export const MovieCard = ({ movie, index, size }: PropsWithMovieCard<Props>) => {
  return (
    <Link href={`/movies/${movie?.id ? movie?.id : ""}`}>
      <motion.div
        className={`relative z-50 ${size == CardSize.LG ? "h-[22rem] w-60" : "h-48 w-32"} shadow-inner`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: index / 3 + 0.2 }}
      >
        <Image
          src={movie?.poster_path ? TMBD_IMAGE_ENDPOINT + movie.poster_path : noImageUrl}
          height={size == CardSize.LG ? 360 : 180}
          width={size == CardSize.LG ? 240 : 120}
          alt=""
          className={`relative z-50 ${
            size == CardSize.LG ? "rounded-xl" : "rounded-md"
          } h-full border-2 shadow-inner transition-all duration-300 hover:border-grey`}
        />
        {size == CardSize.LG && <p className="text-lg font-bold text-white">{movie?.title}</p>}
      </motion.div>
    </Link>
  );
};
