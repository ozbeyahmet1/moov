import Head from 'next/head';

export const HeadComponent = () => {
  return (
    <Head>
      {/* Meta tags */}
      <title>Moov | Stream Bliss</title>
      <meta
        name="description"
        content="Discover a vast collection of movies and TV shows on our streaming platform"
      />
      <meta
        name="keywords"
        content="Movie, Director, Cast, Trailer, Review, Rating, Release Date, Action, Horror, Romantic, Movie Series, Best Movies, New Releases, Most Watched Movies, Oscar Winning Movies, Foreign Language Movies, Movie Industry, Famous Movie Producers, Directors, Critique, Recommendations"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/metalogo.svg" />

      {/* Open Graph tags */}
      {/* Open Graph is a technology that allows web pages to become more rich and engaging when shared on social media platforms such as Facebook, Twitter, and LinkedIn. By adding Open Graph meta tags to your web page, you can control how your page appears when it's shared on social media, including the title, description, and image that are displayed. */}
      <meta property="og:title" content="Moov | Stream Bliss" />
      <meta
        property="og:description"
        content="Discover a vast collection of movies and TV shows on our streaming platform"
      />
      <meta property="og:image" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />

      {/* Twitter tags */}
      {/* Twitter meta tags are similar to Open Graph tags, but are used specifically for Twitter. They allow you to control how your web page appears when it's shared on Twitter, including the title, description, and image that are displayed. */}
      <meta name="twitter:title" content="Moov | Stream Bliss" />
      <meta
        name="twitter:description"
        content="Discover a vast collection of movies and TV shows on our streaming platform"
      />
    </Head>
  );
};
