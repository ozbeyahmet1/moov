import { PropsWithMovieGenre } from "@/utils";
import Link from "next/link";

export const CategoryCard = ({ category }: PropsWithMovieGenre) => {
  return (
    <Link href={`/categories/${category?.id ? category?.id : ""}`}>
      <p className="flex h-fit w-full cursor-pointer items-center justify-center rounded-md border-[1px]  border-darkGrey bg-grey bg-opacity-20 py-2 text-white backdrop-blur-2xl transition-all hover:bg-darkGrey xs:h-32 xs:w-32 xs:py-0">
        {category?.name}
      </p>
    </Link>
  );
};
