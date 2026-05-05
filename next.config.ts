import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cbusdigital.com" }],
        destination: "https://cbusdigital.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
