import glob from 'fast-glob';
import path from 'path';

type Writer = 'Dan Edwards' | 'Google Gemini';

export interface IArticle {
	title: string;
	description: string;
	writer: Writer;
	tags: string;
	keywords: string;

	/** Landscape meta image exactly 1,200 x 675px
	 * No file extension or folder details
	 * Example: 'featured-image'
	 */
	featuredImage: string;

	/**Year-Month-Day: '2024-09-04' */
	date: string;
}

export interface IArticleWithSlug extends IArticle {
	slug: string;
}

async function importArticle(
	articleFilename: string
): Promise<IArticleWithSlug> {
	const slug = path.dirname(articleFilename);

	const { article } = (await import(`../app/articles/${articleFilename}`)) as {
		default: React.ComponentType;
		article: IArticle;
	};

	return {
		slug,
		...article,
	};
}

export async function getAllArticles() {
	const articleFilenames = await glob('*/page.tsx', {
		cwd: './src/app/articles',
	});

	const articles = await Promise.all(articleFilenames.map(importArticle));

	return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
