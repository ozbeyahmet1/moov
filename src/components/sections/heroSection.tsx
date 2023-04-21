import Image from 'next/image';
import Link from 'next/link';
import { Category } from '../../interfaces/category';

const twClasses = {
  categoriesTag:
    'rounded-md uppercase border-2 border-white py-1 px-3 text-sm font-semibold text-white',
  movieName: 'font-mandalore mb-8 text-6xl font-bold uppercase',
};

interface Props {
  readonly movieName?: string;
  readonly description?: string;
  readonly categories?: ReadonlyArray<Category>;
  readonly imageSource: string;
  readonly font?: string;
}

export const HeroSection = ({
  description,
  imageSource,
  categories,
  font,
}: Props) => {
  const fontFamily: string = font ? `font-${font}` : ' ';
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden  pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px]  2xl:pt-[210px]"
      style={{ background: `url(${imageSource})` }}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <div className="max-w-[600px] text-start" data-wow-delay=".2s">
              <Image
                src="https://res.cloudinary.com/droheqpxn/image/upload/v1682038694/movie-app/logo-disney-white_n9ylzi.png"
                width={170}
                height={100}
                alt=""
              />
              <h1
                className={`mb-4 ${fontFamily}  font-bold uppercase leading-tight text-white`}
              >
                Mandalorian
              </h1>
              <p className="mb-5 text-base font-light !leading-relaxed text-grey dark:opacity-90 sm:text-lg md:text-xl">
                {description}
              </p>
              <div className="flex  items-center justify-start  sm:flex-row sm:space-x-4 sm:space-y-0">
                {categories?.map((category) => {
                  return (
                    <Link
                      key={category.id}
                      href="https://nextjstemplates.com/templates/startup"
                      className={twClasses.categoriesTag}
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
