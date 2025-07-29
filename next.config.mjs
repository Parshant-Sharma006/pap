/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gauravexpress.in",
      },
      {
        protocol: "https",
        hostname: "parcelx-docs.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
