import Link from "next/link";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Logo } from "./logo/logo";
const Footer = () => {
  return (
    <footer className="relative bottom-0 z-10  bg-darkBlue pt-6 text-white md:pt-10 lg:pt-12" data-wow-delay=".1s">
      <div className="container">
        <div className="  max-w-[360px] ">
          <Link href="/" className=" inline-block">
            <Logo />
          </Link>
          <p className="text-base font-medium leading-relaxed text-grey">
            Watch movies the way they were meant to be seen - in stunning high definition, with crisp sound, and
            uninterrupted streaming.
          </p>
        </div>
        <div className="mt-4 flex w-full items-center justify-center gap-2 pb-6 text-grey">
          Copyright Hefore
          <AiOutlineCopyrightCircle size={16} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
