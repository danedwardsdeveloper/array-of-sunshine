import glob from 'fast-glob';
import path from 'path';
import { StaticImageData } from 'next/image';

type Writer = 'Dan Edwards' | 'Google Gemini';

type Tag =
	| 'HTML'
	| 'CSS'
	| 'JavaScript'
	| 'TypeScript'
	| 'Book review'
	| 'History'
	| 'React'
	| 'Next'
	| 'Tailwind'
	| 'Codecademy'
	| 'Philosophy'
	| 'Vite'
	| 'VS Code'
	| 'MDX'
	| 'Analytics';

export interface IArticle {
	/** Sentence case with a colon
	 * Example: "Creating a complex React root: order and dependencies"
	 */
	title: string;
	seoTitle?: string;
	description: string;
	writer: Writer;
	tags: Tag[];

	/** Lowercase, separated with a comma and space
	 * 	Example; 'react, next.js, front-end'
	 */
	keywords: string;

	/** Landscape meta image, PNG exactly 1,200 x 675px */
	featuredImage: StaticImageData;

	/**Year-Month-Day
	 * Example: '2024-09-04' */
	date: string;
}

export interface IArticleWithSlug extends IArticle {
	slug: string;
}

export async function getArticleData(
	slug: string
): Promise<IArticleWithSlug | null> {
	try {
		const articleModule = await import(`../app/articles/${slug}/data`);
		const articleData = articleModule.article as IArticle;

		return {
			...articleData,
			slug: slug,
		};
	} catch (error) {
		console.error(`Error reading article ${slug}:`, error);
	}

	return null;
}

export async function getAllArticles(): Promise<IArticleWithSlug[]> {
	try {
		const articlePaths = await glob('src/app/articles/*', {
			onlyDirectories: true,
			ignore: ['_work-in-progress'],
		});

		const articles = await Promise.all(
			articlePaths.map(async (articlePath) => {
				const slug = path.basename(articlePath);
				return await getArticleData(slug);
			})
		);

		return articles
			.filter((article): article is IArticleWithSlug => article !== null)
			.sort(
				(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
			);
	} catch (error) {
		console.error('Error fetching articles:', error);
		return [];
	}
}
