/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// const routes = {
//   async rewrites() {
//     return [
//       // Rewrite everything else to use `pages/index`
//       {
//         source: '/:path*',
//         // destination: '/',
//       },
//     ];
//   },
// }
module.exports = nextConfig; // routes