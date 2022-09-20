/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.io', 'www.nme.com', '*'],
  },
  experiments: {
    topLevelAwait: true,
  },
  webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;

    return config;
  },
};

module.exports = nextConfig;
