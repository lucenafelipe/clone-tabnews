/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/ai/agents/sysint-hero',          // sem barra
        destination: '/ai/agents/sysint-hero/',    // com barra
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      // página e rotas internas com barra final
      {
        source: '/ai/agents/sysint-hero/:path*',
        destination: 'https://rovo-sysint-hero.vercel.app/:path*',
      },

      // (robustez) se alguém acessar sem barra e o browser resolver ./assets como /ai/agents/assets/...
      {
        source: '/ai/agents/assets/:path*',
        destination: 'https://rovo-sysint-hero.vercel.app/assets/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
