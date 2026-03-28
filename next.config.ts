import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  turbopack: {
    root: process.cwd(),
  },
  // basePath: "/Germane-Synergy",
  // assetPrefix: "/Germane-Synergy/",
};

export default nextConfig;