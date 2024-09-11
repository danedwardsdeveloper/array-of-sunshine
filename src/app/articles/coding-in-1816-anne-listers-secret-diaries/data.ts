import { Metadata } from 'next';

import { type IArticle } from '@/library/articles';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: '2024-05-22',
	title: `Coding in 1816 | Anne Lister's secret diaries`,
	description: `Explore the fascinating story of Anne Lister, 'the first modern lesbian,' and her coded diaries. Discover how her secret writings, cracked after decades, reveal a hidden life of love and defiance in 19th-century England. This blog delves into the history and significance of Lister's diaries, their rediscovery, and their impact on LGBTQ+ history.`,
	tags: 'History, Book review',
	keywords: `Anne Lister, secret diaries, coded writing, LGBTQ+ history, 19th-century England, Helena Whitbread, Gentleman Jack, Shibden Hall, lesbian history, historical cryptography, social constraints, hidden identities, literary discoveries, historical preservation, women's history`,
	featuredImage: 'anne-lister-coded-diaries',
};

export const metadata: Metadata = {
	title: article.title,
	description: article.description,
};
