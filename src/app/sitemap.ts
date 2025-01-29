import { productionBaseURL } from '@/library/environment'
import { getAllArticles } from '@/library/getAllArticles'

export default async function sitemap() {
  const articles = await getAllArticles()

  const articlePages = articles.map(article => ({
    url: `${productionBaseURL}/articles/${article.slug}`,
    lastModified: article.date,
  }))

  const routes = ['', '/articles'].map(route => ({
    url: `${productionBaseURL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...articlePages]
}
