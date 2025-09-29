/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // HTML "index" do app
      {
        source: "/ai/agents/sysint-hero",
        destination: "https://rovo-sysint-hero.vercel.app/",
      },
      // Qualquer coisa abaixo do subpath (rotas, assets com subpasta correta)
      {
        source: "/ai/agents/sysint-hero/:path*",
        destination: "https://rovo-sysint-hero.vercel.app/:path*",
      },
      // 🔒 Blindagem: se o browser resolver "./assets" sem o "sysint-hero" no caminho
      // (isso gera /ai/agents/assets/...), garantimos proxy pros assets certos:
      {
        source: "/ai/agents/assets/:path*",
        destination: "https://rovo-sysint-hero.vercel.app/assets/:path*",
      },
    ];
  },
  // importante: não tenha trailingSlash: true
};

module.exports = nextConfig;
