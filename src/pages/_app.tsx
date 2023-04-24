import MovieProvider from "@/providers/movieProvider";
import "@/styles/config.tailwind.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MovieProvider>
        <Component {...pageProps} />
      </MovieProvider>
    </Layout>
  );
}
