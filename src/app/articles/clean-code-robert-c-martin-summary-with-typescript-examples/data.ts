import { Metadata } from 'next';
import { type IArticle } from '@/library/articles';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: '2024-09-10',
	title: `Clean Code by Robert C. Martin - Summary with TypeScript Examples`,
	description: `Explore the key principles of writing maintainable and elegant code in our comprehensive review of Robert C. Martin's 'Clean Code'. This essential guide for software developers offers practical examples and timeless advice for crafting high-quality code.`,
	tags: 'Book review, Software Development, Best Practices',
	keywords: `clean code, robert c. martin, book review, software development, coding best practices, maintainable code, readable code, refactoring techniques, software craftsmanship, meaningful names, function design, error handling, unit testing, code patterns`,
	featuredImage: 'clean-code-robert-c-martin-summary',
};

export const metadata: Metadata = {
	title: article.title,
	description: article.description,
};