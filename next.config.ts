import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.amazonaws.com" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  // Webpack alias for pdf.js compat (canvas/encoding are browser-only)
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
  // Turbopack config (Next.js 15.3+)
  turbopack: {
    resolveAlias: {
      canvas: "./empty-module.ts",
      encoding: "./empty-module.ts",
    },
  },
};

export default nextConfig;
