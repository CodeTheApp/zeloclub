/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.glitch.global',
        pathname: '/366c06b6-90d2-4995-9a79-d42af2d6b7c2/**',
      },
    ],
  },
}

module.exports = nextConfig
