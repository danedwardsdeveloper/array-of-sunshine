import glob from 'fast-glob'
import path from 'path'

import logger from './logger'
import { Article } from '@/types'

export async function getArticleData(slug: string): Promise<Article | null> {
  try {
    const articleModule = await import(`../app/articles/${slug}/data`)
    const articleData = articleModule.article as Article

    if (articleData.slug !== slug) {
      logger.error(
        `Slug mismatch for article "${articleData.title}": ` +
          `Directory name "${slug}" doesn't match article slug "${articleData.slug}"`,
      )
    }

    return articleData
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
  }

  return null
}

export async function getAllArticles(): Promise<Article[]> {
  try {
    const articlePaths = await glob('src/app/articles/*', {
      onlyDirectories: true,
      ignore: ['src/app/articles/_*'],
    })

    const articles = await Promise.all(
      articlePaths.map(async articlePath => {
        const slug = path.basename(articlePath)
        return await getArticleData(slug)
      }),
    )

    return articles
      .filter((article): article is Article => article !== null && !article.hidden)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}
