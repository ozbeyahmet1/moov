import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Input } from "../../ui/input/input";
import { Logo } from "../logo/logo";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 90) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <header
      className={`left-0 top-0 z-40 flex h-20 w-full flex-col items-center justify-center border-b-[0.5px]  border-solid border-grey bg-transparent transition duration-300 ease-in-out ${
        sticky
          ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-blue dark:!bg-opacity-50"
          : "absolute"
      }`}
    >
      <div className="container px-0">
        <div className="relative flex items-center justify-between">
          <div className="w-60 max-w-full px-2 xl:mr-12">
            <Link href="/" className={`header-logo block w-full `}>
              <Logo />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/favorites">
              <AiOutlineHeart className="cursor-pointer" color="white" size={40} />
            </Link>
            <div className="md:invisible lg:visible">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
