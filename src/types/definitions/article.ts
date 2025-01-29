import { StaticImageData } from 'next/image'

import { Tag } from './tags'
import { Writer } from './writers'

export interface Article {
  title: string
  metaTitle?: string
  metaDescription: string
  writer: Writer
  tags: Tag[]
  /** Lowercase, separated with a comma and space
   * 	Example; 'react, next.js, front-end'
   */
  keywords: string
  /** Landscape meta image, PNG exactly 1,200 x 675px
   * Stick to these dimensions even though I'm now using 1,200 x 630px on other sites
   */
  socialImage: StaticImageData
  featuredImage: StaticImageData
  date: string
  slug: string
  hidden?: boolean
}
