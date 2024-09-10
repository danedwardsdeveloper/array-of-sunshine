import fs from 'fs/promises';
import glob from 'fast-glob';
import path from 'path';
import Link from 'next/link';
import { type Metadata } from 'next';

import formatDate from '@/library/formatDate';
import { IArticle, IArticleWithSlug } from '@/library/articles';

export const metadata: Metadata = {
	title: 'Articles',
	description:
		'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
};

async function getArticleData(slug: string): Promise<IArticleWithSlug | null> {
	try {
		const filePath = path.join(
			process.cwd(),
			'src/app/articles',
			slug,
			'page.tsx'
		);
		const content = await fs.readFile(filePath, 'utf8');

		const articleMatch = content.match(
			/export const article: IArticle = ({[\s\S]*?});/
		);

		if (articleMatch) {
			const articleData = eval(`(${articleMatch[1]})`) as IArticle;
			return {
				...articleData,
				slug: slug,
			};
		}
	} catch (error) {
		console.error(`Error reading article ${slug}:`, error);
	}

	return null;
}

export async function ArticlesList() {
	try {
		// Get all article directories, excluding _work-in-progress
		const articlePaths = await glob('src/app/articles/*', {
			onlyDirectories: true,
			ignore: ['src/app/articles/_work-in-progress'],
		});

		// Fetch data for all articles
		const articles = await Promise.all(
			articlePaths.map(async (articlePath) => {
				const slug = path.basename(articlePath);
				return await getArticleData(slug);
			})
		);

		// Filter out null articles and sort by date
		const validArticles = articles
			.filter((article): article is IArticleWithSlug => article !== null)
			.sort(
				(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
			);

		if (validArticles.length === 0) {
			return <p>No articles found.</p>;
		}

		return (
			<div>
				{validArticles.map((article) => (
					<Link
						key={article.slug}
						className="flex flex-col space-y-1 mb-4"
						href={`/articles/${article.slug}`}
					>
						<div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
							{/* 150px might seem too wide but it accommodates wide dates like '23 September 2024' and allows the article titles to line up nicely*/}
							<p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
								{formatDate(article.date)}
							</p>
							<p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
								{article.title}
							</p>
						</div>
					</Link>
				))}
			</div>
		);
	} catch (error) {
		console.error('Error fetching articles:', error);
		return <p>Error loading articles. Please try again later.</p>;
	}
}

export default function ArticlesPage() {
	return (
		<section>
			<h1 className="font-semibold text-2xl mb-8 tracking-tighter">
				Articles
			</h1>
			<ArticlesList />
		</section>
	);
}
