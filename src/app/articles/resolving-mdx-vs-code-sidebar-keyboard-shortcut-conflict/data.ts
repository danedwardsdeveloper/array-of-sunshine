import { Article, tags, writers } from '@/types'

import socialImage from '../../../../public/images/mdx-vs-code-sidebar-keyboard-shortcut-conflict.png'
import featuredImage from './images/mdx-vs-code-sidebar-keyboard-shortcut-conflict.png'

export const article: Article = {
  writer: writers.danEdwards,
  date: `2024-09-15`,
  title: `Resolving MDX and VS Code sidebar shortcut conflicts: a quick guide`,
  metaDescription: `Learn how to fix the conflict between the MDX extension and VS Code's default sidebar shortcut, and discover why MDX might not be the best choice for your projects.`,
  keywords: `MDX, Visual Studio Code, VS Code, keyboard shortcuts, sidebar, TSX, React, web development`,
  tags: [tags.mdx, tags.vsCode],
  featuredImage,
  socialImage,
  slug: 'resolving-mdx-vs-code-sidebar-keyboard-shortcut-conflict',
}
