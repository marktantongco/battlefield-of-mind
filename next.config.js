/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Vercel, don't use export mode - use default
  output: process.env.DEPLOYMENT_TARGET === 'docker' ? 'standalone' : undefined,
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
