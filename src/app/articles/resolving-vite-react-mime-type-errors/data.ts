import { Article, tags, writers } from '@/types'

import socialImage from '../../../../public/images/mime-type-error.png'
import featuredImage from './images/mime-type-error.png'

export const article: Article = {
  writer: writers.danEdwards,
  date: `2024-08-01`,
  title: `Resolving Vite React MIME Type Errors`,
  metaDescription: `Learn how to fix MIME type errors in React, including the "not executable", "application/octet-stream", and "text/html" issues. Discover common causes and quick solutions.`,
  keywords: `React, MIME type error, JavaScript module, Vite, Next.js, JSX, TSX, file extensions, text/html, application/octet-stream, not executable`,
  tags: [tags.react, tags.javascript, tags.typescript, tags.vite],
  featuredImage,
  socialImage,
  slug: 'resolving-vite-react-mime-type-errors',
}
