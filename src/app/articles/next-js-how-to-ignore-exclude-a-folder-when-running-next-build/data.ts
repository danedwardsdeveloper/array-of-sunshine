import { IArticleWithSlug } from '@/library/articles';

import socialImage from '../../../../public/images/social-png/next-js-ignore-folder.png';
import featuredImage from './next-js-ignore-folder.webp';

export const article: IArticleWithSlug = {
	writer: `Dan Edwards`,
	date: `2024-10-22`,
	title: `Next.js: how to ignore/exclude a folder when running "next build"`,
	description: `Learn how to configure Next.js to ignore or exclude specific folders or directories during build time using tsconfig.json.`,
	keywords: `next, next.js, tsconfig.json, build, error`,
	tags: ['Next'],
	socialImage: socialImage,
	featuredImage: featuredImage,
	slug: 'next-js-how-to-ignore-exclude-a-folder-when-running-next-build',
};
