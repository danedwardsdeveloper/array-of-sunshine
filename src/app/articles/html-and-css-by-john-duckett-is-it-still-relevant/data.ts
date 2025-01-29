import { Article, tags, writers } from '@/types'

import socialImage from '../../../../public/images/html-css-john-duckett-book.png'
import featuredImage from './images/html-css-john-duckett-book.png'

export const article: Article = {
  title: 'HTML & CSS by Jon Duckett: is it still relevant?',
  date: '2024-05-08',
  writer: writers.danEdwards,
  tags: [tags.bookReview, tags.html, tags.css],
  metaDescription:
    "Discover if Jon Duckett's 'HTML & CSS' is still relevant in today's fast-evolving web development landscape. This review evaluates its strengths in presenting fundamental concepts and identifies outdated elements and missing modern practices.",
  keywords:
    'html & css book review, jon duckett, web development books, html5, css3, coding education, web design, programming books, outdated tech, modern web practices, book relevance, html semantic elements, css grid, flexbox, responsive design, webp images, coding resources',
  featuredImage,
  socialImage,
  slug: 'html-and-css-by-john-duckett-is-it-still-relevant',
}
