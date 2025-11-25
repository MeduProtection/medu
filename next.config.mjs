/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/OurProducts',
  //       destination: '/',
  //       permanent: false,
  //     },
  //     {
  //       source: '/HowItWorks',
  //       destination: '/',
  //       permanent: false,
  //     },
  //     {
  //       source: '/Industries',
  //       destination: '/',
  //       permanent: false,
  //     },
  //     {
  //       source: '/AboutUs',
  //       destination: '/',
  //       permanent: false,
  //     },
  //     {
  //       source: '/Blog',
  //       destination: '/',
  //       permanent: false,
  //     },
  //     {
  //       source: '/ContactUs',
  //       destination: '/',
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
