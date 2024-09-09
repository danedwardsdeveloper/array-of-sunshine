import { type Metadata } from 'next';
import Link from 'next/link';

import { type ArticleWithSlug, getAllArticles } from '@/library/articles';
import formatDate from '@/library/formatDate';

export const metadata: Metadata = {
	title: 'Articles',
	description:
		'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
};

export default async function ArticlesList() {
	let articles = await getAllArticles();

	return (
		<section>
			<h1 className="font-semibold text-2xl mb-8 tracking-tighter">
				My New Blog
			</h1>
			<div>
				{articles.map((article) => (
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
		</section>
	);
}
