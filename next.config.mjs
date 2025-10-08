/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/GIFCoffee',
  assetPrefix: '/GIFCoffee',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
