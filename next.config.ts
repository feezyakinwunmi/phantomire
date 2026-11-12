import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Ambassador photos uploaded from the admin panel live in Supabase Storage.
    remotePatterns: [{ protocol: "https", hostname: "*.supabase.co", pathname: "/storage/v1/object/public/**" }],
  },
};

export default nextConfig;
