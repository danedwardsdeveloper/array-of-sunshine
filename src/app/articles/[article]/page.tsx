import { FeaturedImage } from '@/components/Images'
import allArticles, { getArticleBySlug } from '@/library/data'
import { formatFullDate } from '@/library/utilities'
import type { Article } from '@/types'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type ResolvedParams = { article: string }
type Params = Promise<ResolvedParams>
type StaticParams = Promise<ResolvedParams[]>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const articleSlug = (await params).article
	const { displayTitle, metaTitle, metaDescription } = getArticleBySlug(articleSlug)

	const relativeImagePath = `/images/${articleSlug}.png`

	return {
		title: metaTitle,
		description: metaDescription,
		openGraph: {
			images: [
				{
					url: relativeImagePath,
					width: 1200,
					height: 675,
					alt: metaTitle,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: displayTitle,
			description: metaDescription,
			images: [relativeImagePath],
		},
		alternates: {
			canonical: `/articles/${articleSlug}`,
		},
		robots: {
			index: true,
			follow: true,
		},
	}
}

export async function generateStaticParams(): StaticParams {
	return allArticles.flatMap((article: Article) => [{ article: article.slug }])
}

export default async function Page({ params }: { params: Params }) {
	const articleSlug = (await params).article
	if (!articleSlug) notFound()

	const { displayTitle, content, publishedAt, updatedAt, metaDescription, featuredImage, borderOnFeaturedImage } =
		getArticleBySlug(articleSlug)

	return (
		<article>
			<h1 className="title text-2xl font-semibold mb-4">{displayTitle}</h1>
			<p className=" text-neutral-600 dark:text-neutral-400 mb-8">by Dan Edwards</p>

			<FeaturedImage image={featuredImage} alt={metaDescription} border={borderOnFeaturedImage} />
			<div className="article-content">{content}</div>

			<p className="italic text-neutral-600 dark:text-neutral-400 mb-4">Published {formatFullDate(publishedAt)}</p>
			{updatedAt && <p className="italic text-neutral-600 dark:text-neutral-400">Updated {formatFullDate(updatedAt)}</p>}
		</article>
	)
}
