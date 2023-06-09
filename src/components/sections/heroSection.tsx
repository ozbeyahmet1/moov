import { Genre } from "@/interfaces/genre";
import Image from "next/image";
import { CategoryTag } from "../tags/categoryTag/categoryTag";

export const HeroSection = () => {
  const categories: ReadonlyArray<Genre> = [
    { id: 18, name: "Drama" },
    { id: 28, name: "Action" },
  ];
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px]  2xl:pt-[210px]"
      style={{
        background: `url(https://res.cloudinary.com/droheqpxn/image/upload/v1681912683/movie-app/backgroundv3_fiu2ju.png)`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="max-w-[600px] text-start" data-wow-delay=".2s">
              <Image
                className="bg-cover"
                src="https://res.cloudinary.com/droheqpxn/image/upload/v1682038694/movie-app/logo-disney-white_n9ylzi.png"
                width={170}
                height={100}
                alt=""
              />
              <h1 className={`mb-4 font-mandalore text-6xl font-bold uppercase leading-tight text-white md:text-8xl`}>
                Mandalorian
              </h1>
              <p className="mb-5 text-base font-light !leading-relaxed text-grey dark:opacity-90 sm:text-lg md:text-xl">
                The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the
                New Republic.
              </p>
              <div className="flex  items-center justify-start gap-2 ">
                {categories?.map((category) => {
                  return <CategoryTag category={category} key={category.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
