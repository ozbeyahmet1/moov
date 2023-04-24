/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_TMDB_API_KEY: process.env.NEXT_TMDB_API_KEY,
  },
  images: {
    domains: ["api.themoviedb.org", "image.tmdb.org", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
