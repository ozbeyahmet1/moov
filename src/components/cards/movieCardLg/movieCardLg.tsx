import { MovieCardProps } from "@/interfaces/movieCard";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TMBD_IMAGE_ENDPOINT, noImageUrl } from "../../../utils";

export const MovieCard = ({ movie: { id, poster_path, title }, index }: MovieCardProps) => {
  console.log(poster_path);
  return (
    <Link href={`movies/${id.toString()}`}>
      <motion.div
        className="relative z-50 w-60 shadow-inner"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: index / 3 + 0.2 }}
      >
        <Image
          src={poster_path ? TMBD_IMAGE_ENDPOINT + poster_path : noImageUrl}
          height={360}
          width={240}
          alt=""
          className="relative z-50 h-[360px] w-60 rounded-xl border-2 shadow-inner transition-all duration-300 hover:border-grey"
        />
        <p className="text-lg font-bold text-white">{title}</p>
      </motion.div>
    </Link>
  );
};
