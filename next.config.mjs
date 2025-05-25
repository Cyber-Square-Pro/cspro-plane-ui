/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/Cyber-Square-Pro/project-assets/**', // Optional but good practice
      },
    ],
  },
};

export default nextConfig;
