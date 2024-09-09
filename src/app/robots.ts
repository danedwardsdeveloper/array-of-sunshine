import { baseUrl } from '@/library/environment';

export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
