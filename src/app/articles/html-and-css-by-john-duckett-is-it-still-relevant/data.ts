import { Metadata } from 'next';

import { type IArticle } from '@/library/articles';
import htmlCssJohnDuckettBook from '../../../../public/images/social-png/html-css-john-duckett-book.png';

export const article: IArticle = {
	title: 'HTML & CSS by Jon Duckett: is it still relevant?',
	date: '2024-05-08',
	writer: 'Dan Edwards',
	tags: ['Book review', 'HTML', 'CSS'],
	description:
		"Discover if Jon Duckett's 'HTML & CSS' is still relevant in today's fast-evolving web development landscape. This review evaluates its strengths in presenting fundamental concepts and identifies outdated elements and missing modern practices.",
	keywords:
		'html & css book review, jon duckett, web development books, html5, css3, coding education, web design, programming books, outdated tech, modern web practices, book relevance, html semantic elements, css grid, flexbox, responsive design, webp images, coding resources',
	featuredImage: htmlCssJohnDuckettBook,
};

export const metadata: Metadata = {
	title: article.title,
	description: article.description,
};
