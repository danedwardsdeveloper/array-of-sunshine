import { Article, tags, writers } from '@/types'

import socialImage from '../../../../public/images/next-js-ignore-folder.png'
import featuredImage from './images/next-js-ignore-folder.webp'

export const article: Article = {
  writer: writers.danEdwards,
  date: `2024-10-22`,
  title: `Next.js: how to ignore/exclude a folder when running "next build"`,
  metaDescription: `Learn how to configure Next.js to ignore or exclude specific folders or directories during build time using tsconfig.json.`,
  keywords: `next, next.js, tsconfig.json, build, error`,
  tags: [tags.nextJs],
  socialImage: socialImage,
  featuredImage: featuredImage,
  slug: 'next-js-how-to-ignore-exclude-a-folder-when-running-next-build',
}
