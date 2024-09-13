/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'knackglobal.com',
          }
        ],
      },
};

export default nextConfig;
