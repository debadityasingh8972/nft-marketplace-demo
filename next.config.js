/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["let-nft-marketplace.infura-ipfs.io" , "gateway.ipfs.io"]
  },
};

module.exports = nextConfig;
