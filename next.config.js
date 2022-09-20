const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn-images-1.listennotes.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/listennotes/:path*",
        destination: "https://listen-api-test.listennotes.com/api/v2/:path*",
      },
    ];
  },
};
// had issues with esm  export
module.exports = nextConfig;
