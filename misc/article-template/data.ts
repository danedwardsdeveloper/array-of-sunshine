// @ts-nocheck
import { Metadata } from 'next';

import { type IArticle } from '@/library/articles';
import exampleFeaturedImage from '../../../../public/images/social-png/mailchimp-email-api-typescript.png';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: `2999-01-01`,
	title: `Article template: this is just a template`,
	description: `This is just a template description`,
	keywords: `keyword`,
	tags: [''],
	featuredImage: exampleFeaturedImage,
};
