/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // IMPORTANT for static export
  trailingSlash: true,     // avoids 404 on routes
  reactStrictMode: true,
}

module.exports = nextConfig;