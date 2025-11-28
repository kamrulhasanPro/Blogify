/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    // domains: ['https://blogify-backend-3r975wi6w-kamrulhasanpros-projects.vercel.app', 'i.postimg.cc']
  },
};

export default nextConfig;
