/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // For static exports
  },
  output: 'export', // For static site generation
  trailingSlash: true, // Better for static hosting
  reactStrictMode: true,
}

module.exports = nextConfig