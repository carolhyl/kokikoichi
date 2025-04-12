import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/kokikoichi',
  assetPrefix: '/kokikoichi',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
