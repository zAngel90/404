/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/404error.com',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/404error.com/',
}

module.exports = nextConfig
