/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'scontent-arn2-2.cdninstagram.com',
      'scontent-arn2-1.cdninstagram.com',
    ],
  },
};

module.exports = nextConfig;
