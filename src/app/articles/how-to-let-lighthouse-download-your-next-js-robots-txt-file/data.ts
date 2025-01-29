import { Article, writers } from '@/types'
import { tags } from '@/types/definitions/tags'

import socialImage from '../../../../public/images/lighthouse-robots-txt-missing-next-js.png'
import featuredImage from '@/app/articles/how-to-let-lighthouse-download-your-next-js-robots-txt-file/images/lighthouse-robots-txt-missing-next-js.png'

export const article: Article = {
  writer: writers.danEdwards,
  date: `2025-01-29`,
  title: `How to let Lighthouse download your Next.js robots.txt file`,
  metaDescription: `Fix Lighthouse's "unable to download robots.txt" error in Next.js by adjusting Content Security Policy headers for perfect SEO scores.`,
  keywords: `next.js, lighthouse, robots.txt, CSP headers, SEO, web performance, content security policy, metadata API`,
  tags: [tags.nextJs, tags.seo, tags.lighthouse],
  featuredImage,
  socialImage,
  slug: 'how-to-let-lighthouse-download-your-next-js-robots-txt-file',
}
