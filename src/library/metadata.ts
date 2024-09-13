import { Metadata } from 'next';

import { IArticle } from '@/library/articles';
import { environment } from './environment';
import { StaticImageData } from 'next/image';

export const siteName = 'Array of Sunshine';

export const defaultMetaTitle = `Array of Sunshine | Full-Stack Web Dev Insights by Dan Edwards`;

export const defaultMetaDescription = `Explore Array of Sunshine, a coding blog by Dan Edwards covering full-stack web development. Dive into Node.js, TypeScript, React, Next.js, Express, MongoDB, and MERN stack applications. Level up your web dev skills today!`;

export const defaultSocialImage = {
	absoluteUrl: `${environment.productionBaseURL}/images/social-png/array-of-sunshine.png`,
	alt: 'Array of Sunshine | Full-Stack Web Dev Blog',
	height: 675,
	width: 1200,
};

function extractImageName(image: StaticImageData): string {
	const fullPath = image.src;
	const filename = fullPath.split('/').pop() || '';
	const nameWithoutHashAndExtension = filename.replace(
		/\.[\w\d]+\.[^.]+$/,
		''
	);

	return nameWithoutHashAndExtension;
}

function generateAbsoluteURL(image: StaticImageData): string {
	const imageName = extractImageName(image);
	return `${environment.productionBaseURL}/images/social-png/${imageName}.png`;
}

export function generateArticleMetadata(article: IArticle): Metadata {
	const absoluteImageURL = generateAbsoluteURL(article.featuredImage);

	return {
		title: article.title,
		description: article.description,
		openGraph: {
			title: article.title,
			description: article.description,
			type: 'article',
			publishedTime: article.date,
			authors: [article.writer],
			images: [
				{
					url: absoluteImageURL,
					width: 1200,
					height: 675,
					alt: article.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: article.title,
			description: article.description,
			images: [absoluteImageURL],
		},
	};
}
