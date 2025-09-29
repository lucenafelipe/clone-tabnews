/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // atende sem barra final
      {
        source: "/ai/agents/sysint-hero",
        destination: "https://rovo-sysint-hero.vercel.app/",
      },
      // atende tudo abaixo (com barra final e rotas/arquivos)
      {
        source: "/ai/agents/sysint-hero/:path*",
        destination: "https://rovo-sysint-hero.vercel.app/:path*",
      },
    ];
  },
  // garanta que NÃO há trailingSlash: true aqui
};

module.exports = nextConfig;
