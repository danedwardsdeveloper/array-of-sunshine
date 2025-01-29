import { Article, tags, writers } from '@/types'

import socialImage from '../../../../public/images/complex-react-root-order.png'
import featuredImage from './images/complex-react-root-order.png'

export const article: Article = {
  writer: writers.danEdwards,
  date: '2024-06-24',
  title: `Creating a complex React root: order and dependencies`,
  metaDescription: `Learn how to set up a complex React root with multiple providers, ensuring robust and maintainable applications. Understand the order and dependencies for a comprehensive React setup.`,
  keywords: `complex react root, react setup, multiple providers, react dependencies, react order, redux, apollo provider, intlprovider, themeprovider, react-helmet, react-router, persistgate, react front-end, javascript, web development`,
  tags: [tags.react],
  slug: 'creating-a-complex-react-root-order-and-dependencies',
  featuredImage,
  socialImage,
}
