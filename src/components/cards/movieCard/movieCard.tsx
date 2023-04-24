import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CardSize } from "../../../interfaces/movieCard";
import { PropsWithMovieCard, TMBD_IMAGE_ENDPOINT, noImageUrl } from "../../../utils";

interface Props {
  readonly index: number;
  readonly size: CardSize;
}

export const MovieCard = ({ movie, index, size }: PropsWithMovieCard<Props>) => {
  const [cardSize, setCardSize] = useState<string>("");

  useEffect(() => {
    switch (size) {
      case CardSize.LG:
        setCardSize("h-[22rem] w-60");
        break;
      case CardSize.MD:
        setCardSize("h-72 w-48");
        break;
      case CardSize.SM:
        setCardSize("h-60 w-40");
        break;
      default:
        break;
    }
  }, [size]);
  return (
    <Link href={`/movies/${movie?.id ? movie?.id : ""}`}>
      <motion.div
        className={`relative z-50 ${cardSize} shadow-inner`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: index / 3 + 0.2 }}
      >
        <Image
          src={movie?.poster_path ? TMBD_IMAGE_ENDPOINT + movie.poster_path : noImageUrl}
          height={360}
          width={240}
          alt=""
          className={`relative z-50 ${
            size == CardSize.LG ? "rounded-xl" : "rounded-md"
          } h-full border-2 shadow-inner transition-all duration-300 hover:border-grey`}
        />
      </motion.div>
    </Link>
  );
};
