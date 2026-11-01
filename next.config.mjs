import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_UNIVERSE_NAME: process.env.NEXT_PUBLIC_UNIVERSE_NAME || process.env.UNIVERSE_NAME || 'Sorvia',
    NEXT_PUBLIC_PROTAGONIST_NAME: process.env.NEXT_PUBLIC_PROTAGONIST_NAME || process.env.PROTAGONIST_NAME || 'Captain Cool',
    NEXT_PUBLIC_VESSEL_NAME: process.env.NEXT_PUBLIC_VESSEL_NAME || process.env.VESSEL_NAME || "The Zephyr's Wake",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
