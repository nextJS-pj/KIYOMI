/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.thehyundai.com"],
  },
  rules: [
    {
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    },
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
