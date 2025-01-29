import { Article, tags, writers } from '@/types'

import socialImage from '../../../../public/images/clean-code-robert-c-martin-summary.png'
import featuredImage from './images/clean-code-robert-c-martin-summary.png'

export const article: Article = {
  writer: writers.danEdwards,
  date: '2024-09-10',
  title: `Clean Code by Robert C. Martin: summary with TypeScript examples`,
  metaDescription: `Explore the key principles of writing maintainable and elegant code in our comprehensive review of Robert C. Martin's 'Clean Code'. This essential guide for software developers offers practical examples and timeless advice for crafting high-quality code.`,
  tags: [tags.typescript, tags.bookReview],
  keywords: `clean code, robert c. martin, book review, software development, coding best practices, maintainable code, readable code, refactoring techniques, software craftsmanship, meaningful names, function design, error handling, unit testing, code patterns`,
  featuredImage,
  socialImage,
  slug: 'clean-code-robert-c-martin-summary-with-typescript-examples',
}
