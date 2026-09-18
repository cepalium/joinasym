import type { NextConfig } from 'next';

// ⚠️ Static export: no Image Optimization API, no middleware, no route handlers.
// The contact form posts to an external endpoint (lib/site.ts → formEndpoint).
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
