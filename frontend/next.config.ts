// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'image.tmdb.org',
//         pathname: '/t/p/**',
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.media-amazon.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;