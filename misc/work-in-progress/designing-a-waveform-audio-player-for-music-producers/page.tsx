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
import WaveformPlayer from './WaveformPlayer'

import additionalImage from '../../../../public/images/regular-webp/featured-image.webp'

export const generateMetadata = (): Metadata => {
  return generateArticleMetadata(article)
}

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <Paragraph>
        Continuing on the success of my{' '}
        <StyledLink href="https://apps.apple.com/gb/app/plant-counter/id6642670343">
          Plant-Counter app
        </StyledLink>
        , I've decided to have a go at making another one. Only this time, my goal is to make money, and it
        will be a Mac app. I've decided on making an audio player app for music producers that displays the
        waveform, as this is something that I would love to use myself.
      </Paragraph>
      <WaveformPlayer />
    </ArticleLayout>
  )
}
