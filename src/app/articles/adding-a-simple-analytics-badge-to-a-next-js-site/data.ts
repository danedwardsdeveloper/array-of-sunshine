import { Article, writers } from '@/types'
import { tags } from '@/types/definitions/tags'

import socialImage from '../../../../public/images/simple-analytics-badge-next-js.png'
import featuredImage from './images/simple-analytics-badge-next-js.png'

export const article: Article = {
  writer: writers.danEdwards,
  date: `2024-09-16`,
  title: `Adding a Simple Analytics badge to a Next.js site`,
  metaDescription: `Learn how to add a Simple Analytics badge to your Next.js site, an excellent alternative to Google Analytics that respects user privacy and doesn't require cookie consent forms.`,
  keywords: `Simple Analytics, Next.js, privacy-friendly analytics, web development`,
  tags: [tags.nextJs, tags.analytics],
  slug: 'adding-a-simple-analytics-badge-to-a-next-js-site',
  featuredImage,
  socialImage,
}
