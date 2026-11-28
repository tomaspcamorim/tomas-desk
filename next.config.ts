import type { NextConfig } from "next";

// Publicado no GitHub Pages em https://tomaspcamorim.github.io/tomas-desk/
const basePath = process.env.NODE_ENV === "production" ? "/tomas-desk" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
