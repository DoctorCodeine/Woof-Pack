/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


const routes = {
  async rewrites(){
    return [
      {
        source: 'src/:path*',
        destination: '/',
      },
    ];
  }
}

// module.exports = nextConfig; //routes

module.exports = {nextConfig, routes};
