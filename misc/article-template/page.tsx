// @ts-nocheck
import { Metadata } from 'next'

import { generateArticleMetadata } from '@/library/articleMetadata'

import { ArticleLayout } from '@/components/ArticleLayout'
import BlockQuote from '@/components/BlockQuote'
import { CodeBlock, InlineCode } from '@/components/Code'
import { Heading2, Heading3 } from '@/components/Headings'
import { AdditionalImage } from '@/components/Images'
import { ListItem, OrderedList, UnorderedList } from '@/components/Lists'
import Paragraph from '@/components/Paragraph'
import StyledLink from '@/components/StyledLink'

import { article } from './data'

import additionalImage from '../../../../public/images/regular-webp/featured-image.webp'

export const generateMetadata = (): Metadata => {
  return generateArticleMetadata({
    ...article,
    slug: 'article-slug',
  })
}

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <Paragraph></Paragraph>
    </ArticleLayout>
  )
}
