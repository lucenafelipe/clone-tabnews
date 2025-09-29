/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/ai/agents/sysint-hero',
        destination: 'https://rovo-sysint-hero.vercel.app',
      },
      {
        source: '/ai/agents/sysint-hero/:path*',
        destination: 'https://rovo-sysint-hero.vercel.app/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
