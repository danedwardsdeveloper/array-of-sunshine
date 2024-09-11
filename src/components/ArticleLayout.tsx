'use client';
import { type IArticle } from '@/library/articles';
import formatDate from '@/library/formatDate';
import { FeaturedImage } from './Images';

export function ArticleLayout({
	article,
	borderOnFeaturedImage,
	children,
}: {
	article: IArticle;
	borderOnFeaturedImage?: boolean;
	children: React.ReactNode;
}) {
	return (
		<article>
			<h1 className="title font-semibold text-2xl tracking-tighter">
				{article.title}
			</h1>

			<div className="flex justify-between items-center mt-2 mb-8 text-sm">
				<p className="text-sm text-neutral-600 dark:text-neutral-400">
					{`by ${article.writer}, ${formatDate(article.date)}`}
				</p>
			</div>
			<FeaturedImage
				src={`${article.featuredImage}`}
				alt={article.title}
				border={borderOnFeaturedImage}
			/>
			<div>{children}</div>
		</article>
	);
}
