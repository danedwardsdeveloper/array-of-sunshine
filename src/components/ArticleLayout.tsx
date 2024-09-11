import { type IArticle } from '@/library/articles';
import formatDate from '@/library/formatDate';
import { FeaturedImage } from './Images';
import { siteName } from '@/library/metadata';

export function generateSEOMetadata(article: IArticle) {
	return {
		title: article.title,
		description: article.description,
		openGraph: {
			title: article.title,
			description: article.description,
			type: 'article',
			publishedTime: article.date,
			authors: [article.writer],
			siteName: siteName,
			images: [
				{
					url: article.featuredImage,
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
			images: [article.featuredImage],
		},
	};
}

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
				image={article.featuredImage}
				alt={article.title}
				border={borderOnFeaturedImage}
			/>
			<div>{children}</div>
		</article>
	);
}
