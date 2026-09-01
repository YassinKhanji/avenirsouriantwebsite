import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },

};

export default nextConfig;
