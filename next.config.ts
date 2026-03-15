import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Germane-Synergy",
  assetPrefix: "/Germane-Synergy/",
};

export default nextConfig;