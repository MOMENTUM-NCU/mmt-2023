/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "momentum23-bukcet.blr1.digitaloceanspaces.com",
      "momentum23-bukcet.blr1.cdn.digitaloceanspaces.com",
      "picsum.photos",
    ],
    unoptimized: true,
  },
};
module.exports = nextConfig;
