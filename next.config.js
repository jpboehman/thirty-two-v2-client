/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  optimizeFonts: false,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  // images: {
	// 	loader: "akamai",
	// 	path:
	// 		process.env.NODE_ENV === "production"
	// 			? "https://admash-admin.envytheme.com/"
	// 			: "http://localhost:3000",
	// },
}

module.exports = nextConfig
