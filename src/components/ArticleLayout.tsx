import { siteName } from '@/library/articleMetadata'
import { type IArticle } from '@/library/articles'
import formatDate from '@/library/formatDate'

import { FeaturedImage } from './Images'

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
  }
}

export function ArticleLayout({
  article,
  borderOnFeaturedImage,
  children,
}: {
  article: IArticle
  borderOnFeaturedImage?: boolean
  children: React.ReactNode
}) {
  return (
    <article>
      <h1 className="title text-2xl font-semibold tracking-tighter">{article.title}</h1>

      <div className="mb-8 mt-2 flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {`by ${article.writer}, ${formatDate(article.date)}`}
        </p>
      </div>
      <FeaturedImage
        image={article.socialImage || article.featuredImage}
        alt={article.title}
        border={borderOnFeaturedImage}
      />
      <div className="article-content">{children}</div>
    </article>
  )
}
