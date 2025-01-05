/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/404error.com',
  assetPrefix: '/404error.com/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
