/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/webp'],
		deviceSizes: [576],
		imageSizes: [],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'simpleanalyticsbadges.com',
				port: '',
				pathname: '/**',
			},
		],
	},
	output: 'standalone',
};

export default nextConfig;
