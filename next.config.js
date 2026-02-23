/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // generate static HTML for Netlify
  trailingSlash: true,     // adds / at the end of routes, avoids 404s
  reactStrictMode: true,
}

module.exports = nextConfig;