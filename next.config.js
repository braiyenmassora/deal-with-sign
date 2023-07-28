/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: true,
    // Add the css property to include the globals.css file
    css: ['styles/globals.css'],
    swcMinify:true
  };


module.exports = nextConfig