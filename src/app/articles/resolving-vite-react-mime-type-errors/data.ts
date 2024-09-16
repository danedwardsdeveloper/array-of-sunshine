import { Metadata } from 'next';

import { type IArticle } from '@/library/articles';
import mimeTypeErrorPhoto from '../../../../public/images/social-png/mime-type-error.png';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: `2024-08-01`,
	title: `Resolving Vite React MIME Type Errors`,
	description: `Learn how to fix MIME type errors in React, including the "not executable", "application/octet-stream", and "text/html" issues. Discover common causes and quick solutions.`,
	keywords: `React, MIME type error, JavaScript module, Vite, Next.js, JSX, TSX, file extensions, text/html, application/octet-stream, not executable`,
	tags: ['React', 'JavaScript', 'TypeScript', 'Vite'],
	featuredImage: mimeTypeErrorPhoto,
};

export const metadata: Metadata = {
	title: article.title,
	description: article.description,
};
