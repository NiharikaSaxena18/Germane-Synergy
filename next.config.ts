import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Removed: incompatible with API routes on Vercel
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  // basePath: "/Germane-Synergy",
  // assetPrefix: "/Germane-Synergy/",
};

export default nextConfig;