/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  env: {
    EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY,
		EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
		EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID
  },
}

module.exports = nextConfig
