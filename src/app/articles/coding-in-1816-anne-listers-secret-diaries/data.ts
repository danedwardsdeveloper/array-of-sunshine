import { Article, tags, writers } from '@/types'

import socialImage from '../../../../public/images/anne-lister-coded-diaries.png'
import featuredImage from './images/anne-lister-coded-diaries.png'

export const article: Article = {
  writer: writers.danEdwards,
  date: '2024-05-22',
  title: `Coding in 1816: Anne Lister's secret diaries`,
  metaDescription: `Discover the history and significance of Lister's 'the first modern lesbian', her coded diaries, and their impact on LGBTQ+ history.`,
  tags: [tags.history, tags.bookReview],
  keywords: `Anne Lister, secret diaries, coded writing, LGBTQ+ history, 19th-century England, Helena Whitbread, Gentleman Jack, Shibden Hall, lesbian history, historical cryptography, social constraints, hidden identities, literary discoveries, historical preservation, women's history`,
  featuredImage,
  socialImage,
  slug: 'coding-in-1816-anne-listers-secret-diaries',
}
