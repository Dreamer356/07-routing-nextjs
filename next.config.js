/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      securityPatchAllowList: ["CVE-2025-66478"]
    }
  }
};

module.exports = nextConfig;
