/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // IMPORTANT for static export
  trailingSlash: true,     // avoids 404 on routes
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;
