import { Metadata } from 'next'
import { StaticImageData } from 'next/image'

import { dynamicBaseURL, productionBaseURL } from './environment'
import logger from './logger'
import { Article } from '@/types'

export const siteName = 'Array of Sunshine'

export const defaultMetaTitle = `Array of Sunshine | Full-Stack Web Dev Insights by Dan Edwards`

export const defaultMetaDescription = `Coding blog by Dan Edwards, covering full-stack web development, Node.js, TypeScript, React, Next.js, Express, MongoDB, and MERN stack applications.`

export const defaultSocialImage = {
  absoluteUrl: `${productionBaseURL}/images/social-png/array-of-sunshine-social.png`,
  alt: 'Array of Sunshine | Full-Stack Web Dev Blog',
  height: 630,
  width: 1200,
}

function validateImageDimensions(image: StaticImageData): boolean {
  const isCorrectDimensions = image.width === 1200 && image.height === 630
  if (!isCorrectDimensions) {
    logger.error(
      `Image "${extractImageName(image)}" has incorrect dimensions. \n`,
      `Required: ${1200}x${630}px,\n`,
      `Found: ${image.width}x${image.height}px`,
    )
  }
  return isCorrectDimensions
}

function extractImageName(image: StaticImageData): string {
  const fullPath = image.src
  const filename = fullPath.split('/').pop() || ''

  if (!/\.png(?:\.[^.]+)?$/.test(filename)) {
    const imageSlug = filename.split('.')[0]
    logger.error(`Social image "${imageSlug}" must be a PNG file. ` + `Found: "${filename}"`)
  }

  const nameWithoutHashAndExtension = filename.replace(/\.[\w\d]+\.[^.]+$/, '')
  return nameWithoutHashAndExtension
}

function generateAbsoluteImageURL(image: StaticImageData): string {
  const imageName = extractImageName(image)
  return `${dynamicBaseURL}/images/${imageName}.png`
}

export function generateArticleMetadata(article: Article): Metadata {
  const imageIs1200by675 = validateImageDimensions(article.socialImage)
  if (!imageIs1200by675) {
    logger.error('Social image is the wrong size')
  }
  const absoluteImageURL = generateAbsoluteImageURL(article.socialImage)

  return {
    title: article.title,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.date,
      authors: [article.writer],
      images: [
        {
          url: absoluteImageURL,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription,
      images: [absoluteImageURL],
    },
    alternates: {
      canonical: `${productionBaseURL}/articles/${article.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
