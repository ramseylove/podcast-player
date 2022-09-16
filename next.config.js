const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn-images-1.listennotes.com"],
  },
};
// had issues with esm  export
module.exports = nextConfig;
