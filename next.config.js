/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use 'standalone' for Docker/Hetzner, 'export' for GitHub Pages
  output: process.env.DEPLOYMENT_TARGET === 'docker' ? 'standalone' : 'export',
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
}

module.exports = nextConfig
