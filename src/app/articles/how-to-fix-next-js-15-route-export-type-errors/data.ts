import { Article, tags, writers } from '@/types'

import socialImage from '../../../../public/images/next-js-15-route-export-type-errors.png'
import featuredImage from './images/next-js-15-route-export-type-errors.png'

export const article: Article = {
  writer: writers.danEdwards,
  date: `2024-11-11`,
  title: `How to fix Next.js 15 route export type errors`,
  metaDescription: `Learn how to fix the Next.js 15 route export type error by correctly typing dynamic route parameters as a Promise.`,
  keywords: `Next.js 15, TypeScript, route handlers, dynamic routes, type error, API routes, Promise types, error fixing, web development, Next.js routing`,
  tags: [tags.typescript, tags.nextJs],
  featuredImage,
  socialImage,
  slug: 'how-to-fix-next-js-15-route-export-type-errors',
}
