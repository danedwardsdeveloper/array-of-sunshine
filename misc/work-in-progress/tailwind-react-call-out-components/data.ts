import { Metadata } from 'next'

import { type IArticle } from '@/library/articles'

import exampleFeaturedImage from '../../../../public/images/social-png/mailchimp-email-api-typescript.png'

export const article: IArticle = {
  writer: `Dan Edwards`,
  date: `2024-10-03`,
  title: `New test article`,
  description: `This is just a template description`,
  keywords: `keyword`,
  tags: [],
  featuredImage: exampleFeaturedImage,
}

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
}
