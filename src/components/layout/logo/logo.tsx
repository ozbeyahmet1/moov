import { Tilt_Prism } from "next/font/google";

const tiltPrism = Tilt_Prism({ subsets: ["latin-ext"] });

export const Logo = () => {
  return <h1 className={`${tiltPrism.className} text-4xl font-bold uppercase text-white md:text-5xl`}>moov</h1>;
};
