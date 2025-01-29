import formatDate from '@/library/formatDate'

import { FeaturedImage } from './Images'
import { Article } from '@/types'

export function ArticleLayout({
  article,
  borderOnFeaturedImage,
  children,
}: {
  article: Article
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
      {children}
    </article>
  )
}
