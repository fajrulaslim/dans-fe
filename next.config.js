/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });
    config.resolve.alias.canvas = false;

    return config;
  },

  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/register",
        destination: "/auth/register",
      },
      {
        source: "/register/sended-mail",
        destination: "/auth/register/sended-mail",
      },
      {
        source: "/forgot-password",
        destination: "/auth/forgot-password",
      },
      {
        source: "/reset-password",
        destination: "/auth/reset-password",
      },
      {
        source: "/reset-password",
        destination: "/auth/reset-password",
      },
      {
        source: "/verify",
        destination: "/auth/verify",
      },
    ];
  },
};

module.exports = nextConfig;
