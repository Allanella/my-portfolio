/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Keep unoptimized: true if you are on the Vercel free tier and want to save on usage
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // REMOVED: output: 'export' and distDir: 'out'
  // These were causing the "routes-manifest.json not found" error
};

module.exports = nextConfig;