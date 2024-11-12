import { Metadata } from 'next'

import { generateArticleMetadata } from '@/library/articleMetadata'

import { ArticleLayout } from '@/components/ArticleLayout'
import CallOut from '@/components/CallOut'
import Paragraph from '@/components/Paragraph'

import { article } from './data'

export const generateMetadata = (): Metadata => {
  return generateArticleMetadata(article)
}

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione iusto, minima cum natus
        voluptate nesciunt aperiam odio modi, quod minus deleniti impedit atque. Provident animi dignissimos
        dolor aliquam voluptas.
      </Paragraph>
      <CallOut colour="blue">
        This is an <strong>informational</strong> call out.
      </CallOut>
      <CallOut colour="green">
        This is a <strong>good</strong> call out.
      </CallOut>
      <CallOut colour="yellow">
        This is a <strong>warning</strong> call out.
      </CallOut>
      <CallOut colour="red">
        This is a <strong>danger</strong> call out.
      </CallOut>
      <CallOut disableEmoji>Default call out with no emoji.</CallOut>
      <CallOut colour="green">
        <strong>{`Extended call out. `}</strong>
        {`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem officia tempore laudantium eaque ut voluptatem, sit ex consequatur maiores neque ducimus molestias cumque possimus. Dolor, corporis adipisci? At, quidem architecto!`}
      </CallOut>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione iusto, minima cum natus
        voluptate nesciunt aperiam odio modi, quod minus deleniti impedit atque. Provident animi dignissimos
        dolor aliquam voluptas.
      </Paragraph>
    </ArticleLayout>
  )
}
