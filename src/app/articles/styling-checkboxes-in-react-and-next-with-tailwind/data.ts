import { Article, writers } from '@/types'
import { tags } from '@/types/definitions/tags'

import socialImage from '../../../../public/images/react-tailwind-checkboxes.png'
import featuredImage from './images/react-tailwind-checkboxes.webp'

export const article: Article = {
  writer: writers.danEdwards,
  date: `2024-09-13`,
  title: `Styling checkboxes in React and Next with Tailwind`,
  metaDescription: `Learn how to customize checkbox / check box colours / colours in Tailwind CSS, including background, tick, and focus ring colours. Step-by-step guide with code examples.`,
  keywords: `Tailwind, CSS, checkbox customization, React, form styling, CSS classes, @tailwindcss/forms plugin, web design, front-end development`,
  tags: [tags.react, tags.nextJs, tags.tailwind],
  featuredImage,
  socialImage,
  slug: 'styling-checkboxes-in-react-and-next-with-tailwind',
}
