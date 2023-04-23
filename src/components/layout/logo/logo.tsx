import { Tilt_Prism } from "next/font/google";

const tiltPrism = Tilt_Prism({ subsets: ["latin"] });

export const Logo = () => {
  return <h1 className={`${tiltPrism.className} text-5xl font-bold uppercase text-white`}>moov</h1>;
};
