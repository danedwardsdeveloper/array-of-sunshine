import { Article, writers } from '@/types'
import { tags } from '@/types/definitions/tags'

import socialImage from '../../../../public/images/codecademy-problem.png'
import featuredImage from './images/codecademy-problem.png'

export const article: Article = {
  writer: writers.danEdwards,
  date: `2024-05-20`,
  title: `The problem with Codecademy`,
  metaDescription: `Discover why Dan Edwards decided to stop the Codecademy Full-Stack Pathway after six months. Learn about the limitations of certificates, the importance of a strong portfolio, and why it's crucial to focus on your personal goals rather than just completing courses`,
  keywords: `Codecademy Full-Stack Pathway, web development, coding courses, online learning platforms, coding certification, programming portfolio, coding job market, self-directed learning, coding skills development, programming career advice, real-world coding projects, job-ready coding skills`,
  tags: [tags.codecademy, tags.philosophy],
  socialImage,
  featuredImage,
  slug: 'the-problem-with-codecademy',
}
