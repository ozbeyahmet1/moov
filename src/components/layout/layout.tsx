// import Footer from './footer';
import { PropsWithChildren } from "react";
import Footer from "./footer";
import { HeadComponent } from "./head";
import Navbar from "./navbar/navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <HeadComponent />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
