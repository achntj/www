/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/posts/:path*",
        destination: "/writing/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
