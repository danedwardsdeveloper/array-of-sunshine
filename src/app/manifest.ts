import { MetadataRoute } from 'next';

import { title, description } from '@/library/baseMetadata';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: title,
		short_name: 'Array of Sunshine',
		description: description,
		start_url: '/',
		display: 'standalone',

		// Light gray for the splash screen
		background_color: '#F8F8F8',

		// Black text
		theme_color: '#FFFFFF',
		icons: [
			{
				src: '/favicon/icon-192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/favicon/icon-512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	};
}
