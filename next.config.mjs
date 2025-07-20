/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gauravexpress.in",
      },
    ],
  },
};

export default nextConfig;
