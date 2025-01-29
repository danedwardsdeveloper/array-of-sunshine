import { Article, tags, writers } from '@/types'

import socialImage from '../../../../public/images/temporary-photo.png'
import featuredImage from './images/temporary-photo.png'

export const article: Article = {
  hidden: true,
  title: 'Title up to 65 characters',
  metaDescription: 'Meta description up to 155 characters',
  writer: writers.danEdwards,
  tags: [tags.nextJs],
  keywords: '',
  socialImage,
  featuredImage,
  date: '2025-01-31',
  slug: 'article-template',
}
