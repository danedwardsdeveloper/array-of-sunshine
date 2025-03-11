import type { NextConfig } from "next";

// ToDo: add redirect from fly.io
const nextConfig: NextConfig = {
	output: "standalone",
	async redirects() {
		return [
			{
				source: "/:path*",
				has: [
					{
						type: "host",
						value: "www.arrayofsunshine.co.uk",
					},
				],
				destination: "https://arrayofsunshine.co.uk/:path*",
				permanent: true,
			},
			{
				source: "/:path*",
				has: [
					{
						type: "host",
						value: "array-of-sunshine.fly.dev",
					},
				],
				destination: "https://arrayofsunshine.co.uk/:path*",
				permanent: true,
			},
		];
	},
	async headers() {
		return [
			{
				source: "/robots.txt", // Can't remember what this is for now...
				headers: [
					{
						key: "Content-Security-Policy",
						value:
							"connect-src 'self'; script-src 'none'; object-src 'none'; frame-src 'none'",
					},
				],
			},
		];
	},
};

export default nextConfig;
