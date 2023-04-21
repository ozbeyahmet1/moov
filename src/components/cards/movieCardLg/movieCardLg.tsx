import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MovieCardProps } from '../../../interfaces/movieCard';

export const MovieCard = ({ banner_src, id, movieId }: MovieCardProps) => {
  return (
    <Link href={`movies/${movieId.toString()}`}>
      <motion.div
        className="relative z-50 w-60 shadow-inner"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: id / 3 + 0.2 }}
      >
        <Image
          src={banner_src}
          height={360}
          width={240}
          alt=""
          className="relative z-50 w-60 rounded-xl border-2 shadow-inner transition-all duration-300 hover:border-grey"
        />
      </motion.div>
    </Link>
  );
};
