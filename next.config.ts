import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes to URLs
  images: {
    unoptimized: true // Required for static export
  }
};

export default nextConfig;
