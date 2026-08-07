import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tr.rbxcdn.com",
      },
      {
        protocol: "https",
        hostname: "fts.rbxcdn.com",
      },
      {
        protocol: "https",
        hostname: "t7.rbxcdn.com",
      },
    ],
  },
};

export default nextConfig;