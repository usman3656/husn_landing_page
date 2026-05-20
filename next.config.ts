import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default config;
