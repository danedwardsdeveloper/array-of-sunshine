import { getAllArticles } from '@/library/articles'
import { environment } from '@/library/environment'

export async function GET() {
  const allArticles = await getAllArticles()

  const itemsXml = allArticles
    .sort((a, b) => {
      if (new Date(a.date) > new Date(b.date)) {
        return -1
      }
      return 1
    })
    .map(
      post =>
        `<item>
          <title>${post.title}</title>
          <link>${environment.productionBaseURL}/articles/${post.slug}</link>
          <description>${post.description || ''}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>`,
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Array of Sunshine</title>
        <link>${environment.productionBaseURL}</link>
        <description>Array of Sunshine web dev blog RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
