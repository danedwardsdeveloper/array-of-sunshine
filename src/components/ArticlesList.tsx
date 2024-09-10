import Link from 'next/link';

import { getAllArticles } from '@/library/articles';
import formatDate from '@/library/formatDate';

export default async function ArticlesList() {
	const articles = await getAllArticles();

	if (articles.length === 0) {
		return <p>No articles found.</p>;
	}

	return (
		<div>
			{articles.map((article) => (
				<Link
					key={article.slug}
					href={`/articles/${article.slug}`}
					className="flex flex-col space-y-1 mb-4"
				>
					<div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
						<p className="text-neutral-600 dark:text-neutral-400 tabular-nums md:w-40 md:flex-shrink-0 md:mr-2">
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
}
