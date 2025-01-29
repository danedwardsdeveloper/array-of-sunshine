import { Article, tags, writers } from '@/types'

import socialImage from '../../../../public/images/john-sonmez-software-developers-career-guide-summary.png'
import featuredImage from './images/john-sonmez-software-developers-career-guide-summary.png'

export const article: Article = {
  writer: writers.danEdwards,
  date: `2024-09-21`,
  title: `The Complete Software Developer's Career Guide: book review and summary`,
  metaDescription: `A comprehensive review of John Sonmez's "The Complete Software Developer's Career Guide", coding book, discussing its strengths, weaknesses, and key takeaways.`,
  keywords: `software development, career guide, book review, John Sonmez, programming careers, tech industry advice`,
  tags: [tags.bookReview],
  featuredImage,
  socialImage,
  slug: 'complete-software-developers-career-guide-book-review-and-summary',
}
