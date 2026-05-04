/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Recommended for Vercel Free tier
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Remove the 'output: export' logic entirely to allow standard Vercel deployment
};

module.exports = nextConfig;