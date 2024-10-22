/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [320, 480, 576],
		imageSizes: [16, 32, 64, 96, 128, 256],
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
