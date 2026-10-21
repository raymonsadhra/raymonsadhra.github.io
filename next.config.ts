import type { NextConfig } from "next";

const basePath = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  basePath,
};

export default nextConfig;
