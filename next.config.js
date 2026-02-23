/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // important: creates static HTML files
  trailingSlash: true, // optional: adds / at the end for routes
}

module.exports = nextConfig;