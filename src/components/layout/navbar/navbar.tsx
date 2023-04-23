import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Input } from '../../../components/ui/input';
import { Logo } from '../logo/logo';

const Header = () => {
  // Navbar toggle

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 90) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  return (
    <header
      className={`left-0 top-0 z-40 flex h-20 w-full flex-col items-center justify-center border-b-[0.5px]  border-solid border-grey bg-transparent transition duration-300 ease-in-out ${
        sticky
          ? '!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-blue dark:!bg-opacity-50'
          : 'absolute'
      }`}
    >
      <div className="container px-0">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-2 xl:mr-12">
            <Link href="/" className={`header-logo block w-full `}>
              <Logo />
            </Link>
          </div>

          <div className="md:invisible lg:visible">
            <Input />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
