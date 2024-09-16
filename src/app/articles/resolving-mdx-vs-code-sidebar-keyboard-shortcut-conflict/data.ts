import { Metadata } from 'next';

import { type IArticle } from '@/library/articles';
import mdxImage from '../../../../public/images/social-png/mdx-vs-code-sidebar-keyboard-shortcut-conflict.png';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: `2024-09-15`,
	title: `Resolving MDX and VS Code sidebar shortcut conflicts: a quick guide`,
	description: `Learn how to fix the conflict between the MDX extension and VS Code's default sidebar shortcut, and discover why MDX might not be the best choice for your projects.`,
	keywords: `MDX, Visual Studio Code, VS Code, keyboard shortcuts, sidebar, TSX, React, web development`,
	tags: ['MDX', 'VS Code'],
	featuredImage: mdxImage,
};

export const metadata: Metadata = {
	title: article.title,
	description: article.description,
};
