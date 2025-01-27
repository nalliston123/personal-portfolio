/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Only run in production and when not running on the server
    if (!dev && !isServer) {
      // Enable CSS optimization
      config.optimization.minimize = true;
    }
    return config;
  },
}

module.exports = nextConfig

