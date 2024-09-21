import { Metadata } from 'next';

import { type IArticle } from '@/library/articles';
import careerGuideBook from '../../../../public/images/social-png/john-sonmez-software-developers-career-guide-summary.png';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: `2024-09-21`,
	title: `The Complete Software Developer's Career Guide: book review and summary`,
	seoTitle: `Complete Software Developer's Career Guide: book review & summary`,
	description: `A comprehensive review of John Sonmez's "The Complete Software Developer's Career Guide", coding book, discussing its strengths, weaknesses, and key takeaways.`,
	keywords: `software development, career guide, book review, John Sonmez, programming careers, tech industry advice`,
	tags: ['Book review'],
	featuredImage: careerGuideBook,
};

export const metadata: Metadata = {
	title: article.seoTitle,
	description: article.description,
	keywords: article.keywords,
};
