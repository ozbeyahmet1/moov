import { PropsWithMovieGenre } from "@/utils";
import Link from "next/link";

export const CategoryTag = ({ category }: PropsWithMovieGenre) => {
  return (
    <Link href={`/categories/${category?.id ? category?.id : ""}`}>
      <div className="rounded-md border-2 border-white px-3 py-1 text-sm font-semibold uppercase text-white">
        {category?.name}
      </div>
    </Link>
  );
};
