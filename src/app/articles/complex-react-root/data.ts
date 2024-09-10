import { Metadata } from 'next';
import { type IArticle } from '@/library/articles';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: '2024-06-24',
	title: `Creating a Complex React Root | Order and Dependencies`,
	description: `Learn how to set up a complex React root with multiple providers, ensuring robust and maintainable applications. Understand the order and dependencies for a comprehensive React setup.`,
	keywords: `complex react root, react setup, multiple providers, react dependencies, react order, redux, apollo provider, intlprovider, themeprovider, react-helmet, react-router, persistgate, react front-end, javascript, web development`,
	tags: 'React, React Router, React Helmet',
	featuredImage: 'react',
};

export const metadata: Metadata = {
	title: article.title,
	description: article.description,
};
