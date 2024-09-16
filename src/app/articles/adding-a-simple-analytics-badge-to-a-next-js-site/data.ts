import { Metadata } from 'next';

import { type IArticle } from '@/library/articles';
import simpleAnalyticsImage from '../../../../public/images/social-png/simple-analytics-badge-next-js.png';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: `2024-09-16`,
	title: `Adding a Simple Analytics badge to a Next.js site`,
	description: `Learn how to add a Simple Analytics badge to your Next.js site, an excellent alternative to Google Analytics that respects user privacy and doesn't require cookie consent forms.`,
	keywords: `Simple Analytics, Next.js, privacy-friendly analytics, web development`,
	tags: ['Next', 'Analytics'],
	featuredImage: simpleAnalyticsImage,
};

export const metadata: Metadata = {
	title: article.title,
	description: article.description,
};
