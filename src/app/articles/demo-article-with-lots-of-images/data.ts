import { Metadata } from 'next';

import { type IArticle } from '@/library/articles';
import demoFeaturedImage from '../../../../public/images/social-png/mailchimp-email-api-typescript.png';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: `2024-09-11`,
	title: `Demonstration article with lots of images`,
	description: `This is just a demonstration article with lots of images`,
	keywords: `demo article`,
	tags: 'history',
	featuredImage: demoFeaturedImage,
};

export const metadata: Metadata = {
	title: article.title,
	description: article.description,
};
