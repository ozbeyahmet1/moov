import { PropsWithMovieGenres } from "@/utils";
import { CategoryCard } from "../cards/categoryCard/categoryCard";

export const CategoriesSection = ({ categories }: PropsWithMovieGenres) => {
  return (
    <div className="w-full  bg-darkBlue">
      <section className="container bg-darkBlue py-10 lg:px-0 ">
        <h2 className="mb-4 p-0 text-xl font-bold text-white">Watch by Categories</h2>
        <div className=" grid grid-cols-1 gap-x-2 gap-y-2 p-0 xs:grid-cols-3 xs:gap-y-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-9">
          {categories &&
            categories.slice(0, 18).map((category) => {
              return <CategoryCard category={category} key={category.id} />;
            })}
        </div>
      </section>
    </div>
  );
};
