import { Metadata } from 'next'
import { StaticImageData } from 'next/image'

import { IArticleWithSlug } from '@/library/articles'

import { environment } from './environment'

export const siteName = 'Array of Sunshine'

export const defaultMetaTitle = `Array of Sunshine | Full-Stack Web Dev Insights by Dan Edwards`

export const defaultMetaDescription = `Coding blog by Dan Edwards, covering full-stack web development, Node.js, TypeScript, React, Next.js, Express, MongoDB, and MERN stack applications.`

export const defaultSocialImage = {
  absoluteUrl: `${environment.productionBaseURL}/images/social-png/array-of-sunshine-social.png`,
  alt: 'Array of Sunshine | Full-Stack Web Dev Blog',
  height: 675,
  width: 1200,
}

function extractImageName(image: StaticImageData): string {
  const fullPath = image.src
  const filename = fullPath.split('/').pop() || ''
  const nameWithoutHashAndExtension = filename.replace(/\.[\w\d]+\.[^.]+$/, '')

  return nameWithoutHashAndExtension
}

function generateAbsoluteImageURL(image: StaticImageData): string {
  const imageName = extractImageName(image)
  return `${environment.productionBaseURL}/images/social-png/${imageName}.png`
}

export function generateArticleMetadata(article: IArticleWithSlug): Metadata {
  const absoluteImageURL = generateAbsoluteImageURL(article.featuredImage)

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.writer],
      images: [
        {
          url: absoluteImageURL,
          width: 1200,
          height: 675,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [absoluteImageURL],
    },
    alternates: {
      canonical: `${environment.productionBaseURL}/articles/${article.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
