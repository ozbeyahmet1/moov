import { PropsWithMovieGenres } from "@/utils";
import { CategoryCard } from "../cards/categoryCard/categoryCard";

export const CategoriesSection = ({ categories }: PropsWithMovieGenres) => {
  return (
    <section className="  bg-darkBlue px-0 py-10 ">
      <h2 className="container mb-4 p-0 text-xl font-bold text-white">Watch by Categories</h2>
      <div className="container grid grid-cols-9 gap-x-2 gap-y-6 p-0">
        {categories &&
          categories.slice(0, 18).map((category) => {
            return <CategoryCard category={category} key={category.id} />;
          })}
      </div>
    </section>
  );
};
