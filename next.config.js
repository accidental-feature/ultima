/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  env: {
    EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY,
		EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
		EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID
  },
	async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_SUPABASE_URL,
      },
    ];
  },
}

module.exports = nextConfig
