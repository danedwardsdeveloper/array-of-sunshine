'use client';
import { Prose } from '@/components/Prose';
import { type ArticleWithSlug } from '@/library/articles';
import formatDate from '@/library/formatDate';
import { FeaturedImage } from '@/components/Images';

export function ArticleLayout({
	article,
	children,
}: {
	article: ArticleWithSlug;
	children: React.ReactNode;
}) {
	return (
		<section>
			<article>
				<h1 className="title font-semibold text-2xl tracking-tighter">
					{article.title}
				</h1>

				<div className="flex justify-between items-center mt-2 mb-8 text-sm">
					<p className="text-sm text-neutral-600 dark:text-neutral-400">
						{formatDate(article.date)}
					</p>
				</div>
				<FeaturedImage src={article.featuredImage} alt={article.title} />
			</article>
			<Prose data-mdx-content>{children}</Prose>
		</section>
	);
}
