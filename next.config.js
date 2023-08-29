const url = new URL(process.env.BASE_API_URL);
const { hostname } = url;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_API_URL: process.env.BASE_API_URL
  },
  images: {
    domains: [hostname]
  },
  swcMinify: true
};

module.exports = nextConfig;
