import { MetadataRoute } from 'next';

import {
	defaultMetaTitle,
	defaultMetaDescription,
} from '@/library/articleMetadata';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: defaultMetaTitle,
		short_name: 'Array of Sunshine',
		description: defaultMetaDescription,
		start_url: '/',
		display: 'standalone',
		background_color: '#000',
		theme_color: '#000',
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
