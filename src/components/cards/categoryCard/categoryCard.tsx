import { PropsWithMovieGenre } from "@/utils";

export const CategoryCard = ({ category }: PropsWithMovieGenre) => {
  return (
    <p className="flex h-32 w-32  cursor-pointer  items-center justify-center rounded-md border-[1px] border-darkGrey bg-grey bg-opacity-20 text-white backdrop-blur-2xl transition-all hover:bg-darkGrey">
      {category?.name}
    </p>
  );
};
