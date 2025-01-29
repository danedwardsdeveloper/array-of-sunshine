import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 480, 576],
    imageSizes: [16, 32, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'simpleanalyticsbadges.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'queue.simpleanalyticscdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.arrayofsunshine.co.uk',
          },
        ],
        destination: 'https://arrayofsunshine.co.uk/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'array-of-sunshine.fly.dev',
          },
        ],
        destination: 'https://arrayofsunshine.co.uk/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "connect-src 'self'; script-src 'none'; object-src 'none'; frame-src 'none'",
          },
        ],
      },
    ]
  },
}

export default nextConfig
