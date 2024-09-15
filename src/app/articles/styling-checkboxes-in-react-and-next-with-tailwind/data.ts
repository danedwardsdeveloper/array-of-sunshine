import { Metadata } from 'next';

import { type IArticle } from '@/library/articles';
import reactTailwindCheckboxes from '../../../../public/images/social-png/react-tailwind-checkboxes.webp';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: `2024-09-13`,
	title: `Styling checkboxes in React and Next with Tailwind`,
	description: `Learn how to customize checkbox / check box colours / colours in Tailwind CSS, including background, tick, and focus ring colours. Step-by-step guide with code examples.`,
	keywords: `Tailwind, CSS, checkbox customization, React, form styling, CSS classes, @tailwindcss/forms plugin, web design, front-end development`,
	tags: ['React', 'Next', 'Tailwind'],
	featuredImage: reactTailwindCheckboxes,
};

export const metadata: Metadata = {
	title: article.title,
	description: article.description,
};
