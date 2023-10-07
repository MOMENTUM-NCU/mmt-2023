/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "momentum-poster-s3.s3.ap-south-1.amazonaws.com",
      "momentum23-bukcet.blr1.digitaloceanspaces.com",
      "momentum23-bukcet.blr1.cdn.digitaloceanspaces.com",

      "picsum.photos",
    ],
  },
};
module.exports = nextConfig;
