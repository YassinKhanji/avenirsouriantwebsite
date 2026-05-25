import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
