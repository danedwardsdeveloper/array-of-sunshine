import { Article, tags, writers } from '@/types'

import socialImage from '../../../../public/images/typescript.png'
import featuredImage from './images/getting-started-with-typescript.webp'

export const article: Article = {
  writer: writers.danEdwards,
  date: `2024-09-12`,
  title: `Getting started with TypeScript: a super fast guide`,
  metaDescription: `A concise guide on setting up a TypeScript project with minimal configuration, including project structure, dependency installation, and basic TypeScript usage.`,
  keywords:
    'TypeScript setup, pnpm, tsx, nodemon, tsconfig, Project initialization, Dependency management, TypeScript configuration, Development workflow',
  tags: [tags.typescript],
  featuredImage,
  socialImage,
  slug: 'getting-started-with-typescript-a-super-fast-guide',
}
