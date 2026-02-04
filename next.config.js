/** @type {import('next').NextConfig} */
const nextConfig = {
  // No output mode for Vercel - use default server mode
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: '**.wp.com',
      },
    ],
  },
  trailingSlash: true,
  // Ensure we use the correct SWC binary
  experimental: {
    forceSwcTransforms: false,
  },
}

module.exports = nextConfig
