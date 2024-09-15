import { Metadata } from 'next';

import { type IArticle } from '@/library/articles';
import featuredImage from '../../../../public/images/social-png/codecademy-problem.png';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: `2024-05-20`,
	title: `The problem with Codecademy`,
	description: `Discover why Dan Edwards decided to stop the Codecademy Full-Stack Pathway after six months. Learn about the limitations of certificates, the importance of a strong portfolio, and why it's crucial to focus on your personal goals rather than just completing courses`,
	keywords: `Codecademy Full-Stack Pathway, web development, coding courses, online learning platforms, coding certification, programming portfolio, coding job market, self-directed learning, coding skills development, programming career advice, real-world coding projects, job-ready coding skills`,
	tags: ['Codecademy', 'Philosophy'],
	featuredImage: featuredImage,
};

export const metadata: Metadata = {
	title: article.title,
	description: article.description,
};
