/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/webp'],
		deviceSizes: [576],
		imageSizes: [],
	},
	output: 'standalone',
};

export default nextConfig;
