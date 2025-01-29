import { generateArticleMetadata } from '@/library/articleMetadata'

import { ArticleLayout } from '../_components/ArticleLayout'
import { CodeBlock } from '@/app/articles/_components/Code'

import { article } from './data'

export const metadata = generateArticleMetadata(article)

export default function Page() {
  return (
    <ArticleLayout article={article} borderOnFeaturedImage>
      <p>
        {`Want to ignore certain folders/directories when running "next
				build"? Here's the solution - just add the folder to the exclude
				array in your tsconfig.json (or jsconfig.json):`}
      </p>

      <CodeBlock language={'json'} fileName={'tsconfig.json'}>{`
			{ 
	...
	"exclude": ["node_modules", "misc", "work-in-progress"]
}
	`}</CodeBlock>
      <p>
        {`Here, the `}
        <code>node_modules</code>
        {` folder is ignored as
				usual, and my `}
        <code>misc</code>
        {` and `}
        <code>work-in-progress</code>
        {` folders (in the root directory) will be ignored too. `}
      </p>
      <p>{`That's it! Next.js will now ignore these folders during the build process.`}</p>
    </ArticleLayout>
  )
}
