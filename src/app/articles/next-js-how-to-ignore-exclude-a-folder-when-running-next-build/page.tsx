import { Metadata } from 'next'

import { generateArticleMetadata } from '@/library/articleMetadata'

import { ArticleLayout } from '@/components/ArticleLayout'
import { CodeBlock, InlineCode } from '@/components/Code'
import Paragraph from '@/components/Paragraph'

import { article } from './data'

export const generateMetadata = (): Metadata => {
  return generateArticleMetadata(article)
}

export default function Page() {
  return (
    <ArticleLayout article={article} borderOnFeaturedImage>
      <Paragraph>
        {`Want to ignore certain folders/directories when running "next
				build"? Here's the solution - just add the folder to the exclude
				array in your tsconfig.json (or jsconfig.json):`}
      </Paragraph>

      <CodeBlock language={'json'} fileName={'tsconfig.json'}>{`
			{ 
	...
	"exclude": ["node_modules", "misc", "work-in-progress"]
}
	`}</CodeBlock>
      <Paragraph>
        {`Here, the `}
        <InlineCode>node_modules</InlineCode>
        {` folder is ignored as
				usual, and my `}
        <InlineCode>misc</InlineCode>
        {` and `}
        <InlineCode>work-in-progress</InlineCode>
        {` folders (in the root directory) will be ignored too. `}
      </Paragraph>
      <Paragraph>{`That's it! Next.js will now ignore these folders during the build process.`}</Paragraph>
    </ArticleLayout>
  )
}
