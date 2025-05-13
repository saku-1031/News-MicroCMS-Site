import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.microcms-assets.io"], // 画像のホスト名を追加
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
