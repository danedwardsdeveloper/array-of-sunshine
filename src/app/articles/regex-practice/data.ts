import { IArticleWithSlug } from '@/library/articles'

import socialImage from '../../../../public/images/social-png/anne-lister-coded-diaries.png'
import featuredImage from '../../../../public/images/social-png/anne-lister-coded-diaries.png'

export const article: IArticleWithSlug = {
  writer: `Dan Edwards`,
  date: `2025-01-05`,
  title: `Regex practice`,
  description: `Learn how to configure Next.js to ignore or exclude specific folders or directories during build time using tsconfig.json.`,
  keywords: `next, next.js, tsconfig.json, build, error`,
  tags: ['Next'],
  socialImage,
  featuredImage,
  slug: 'regex-practice',
}
