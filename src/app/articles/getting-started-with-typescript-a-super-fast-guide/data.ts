import { Metadata } from 'next';

import { type IArticle } from '@/library/articles';
import typeScriptImage from '../../../../public/images/social-png/typescript.png';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: `2024-09-12`,
	title: `Getting started with TypeScript: a super fast guide`,
	description: `A concise guide on setting up a TypeScript project with minimal configuration, including project structure, dependency installation, and basic TypeScript usage.`,
	keywords:
		'TypeScript setup, pnpm, tsx, nodemon, tsconfig, Project initialization, Dependency management, TypeScript configuration, Development workflow',
	tags: ['TypeScript'],
	featuredImage: typeScriptImage,
};

export const metadata: Metadata = {
	title: article.title,
	description: article.description,
};
