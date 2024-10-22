import { Metadata } from 'next';

import { type IArticle } from '@/library/articles';
import exampleFeaturedImage from '../../../../public/images/social-png/mailchimp-email-api-typescript.png';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: `2999-01-01`,
	title: `Designing a waveform audio player for music producers`,
	description: `This is just a template description`,
	keywords: `keyword`,
	tags: [],
	featuredImage: exampleFeaturedImage,
};

export const metadata: Metadata = {
	title: article.title,
	description: article.description,
};
