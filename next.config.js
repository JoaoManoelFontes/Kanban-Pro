/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_USER_EMAIL: process.env.API_USER_EMAIL,
    API_USER_PASSWORD: process.env.API_USER_PASSWORD,
  },
}

module.exports = nextConfig
