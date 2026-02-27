import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    emotion: false,
  },
  // Disable Turbopack and explicitly use Webpack for build stability
  webpack: (config, { isServer }) => {
    config.experiments = { topLevelAwait: true, layers: true };
    return config;
  },
  /* config options here */
};

export default nextConfig;
