import { environment } from '@/library/environment';

export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
			},
		],
		sitemap: `${environment.productionBaseURL}/sitemap.xml`,
	};
}
