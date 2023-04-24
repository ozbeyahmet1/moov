// import Footer from './footer';
import { PropsWithChildren } from "react";
import { Footer } from "./footer/footer";
import { HeadComponent } from "./head";
import { Navbar } from "./navbar/navbar";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <HeadComponent />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
