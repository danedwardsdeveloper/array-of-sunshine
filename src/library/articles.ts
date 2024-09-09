import glob from 'fast-glob';

type Writer = 'Dan Edwards' | 'Google Gemini';

export interface Article {
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

export interface ArticleWithSlug extends Article {
	slug: string;
}

async function importArticle(
	articleFilename: string
): Promise<ArticleWithSlug> {
	let { article } = (await import(`../app/articles/${articleFilename}`)) as {
		default: React.ComponentType;
		article: Article;
	};

	return {
		slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
		...article,
	};
}

export async function getAllArticles() {
	let articleFilenames = await glob('*/page.mdx', {
		cwd: './src/app/articles',
	});

	let articles = await Promise.all(articleFilenames.map(importArticle));

	return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
