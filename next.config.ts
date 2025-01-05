/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/404error.com',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
