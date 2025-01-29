import { generateArticleMetadata } from '@/library/articleMetadata'

import { ArticleLayout } from '../_components/ArticleLayout'
import { CodeBlock } from '@/app/articles/_components/Code'

import { article } from './data'

export const metadata = generateArticleMetadata(article)

export default function Page() {
  return (
    <ArticleLayout article={article} borderOnFeaturedImage>
      <p>{`When working with Next.js 15 API routes, you might encounter a TypeScript error stating that your route has an invalid export. Specifically, you might see this error during the build:`}</p>
      <CodeBlock
        language="bash"
        fileName="Command line"
        disableLineNumbers
      >{`   Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types  ..Failed to compile.

src/app/api/articles/[slug]/route.ts
Type error: Route "src/app/api/articles/[slug]/route.ts" has an invalid "GET" export:
  Type "Props" is not a valid type for the function's second argument.`}</CodeBlock>
      <p>{`This error occurs when using the traditional approach to typing route parameters:`}</p>
      <CodeBlock
        fileName="src/app/api/articles/[slug]/route.ts"
        language="typescript"
      >{`// 🚫 This approach no longer works in Next.js 15

import { NextRequest } from 'next/server'
import { getArticleBySlug } from '@/library/articles'

type Props = {
 params: {
   slug: string
 }
}

export async function GET(
 req: NextRequest,
 props: Props
): Promise<NextResponse> {
 try {
   const article = await getArticleBySlug(
     props.params.slug
   )
   // ...rest of the handler
 } catch (error) {
   // error handling
 }
}`}</CodeBlock>
      <h2>{`The Solution`}</h2>
      <p>{`In Next.js 15, route parameters are now handled as a Promise. Here's the correct way to type and handle them:`}</p>
      <CodeBlock
        fileName="src/app/api/articles/[slug]/route.ts"
        language="typescript"
      >{`// ✅ The correct approach for Next.js 15

import { NextRequest, NextResponse } from 'next/server'
import { getArticleBySlug } from '@/library/articles'

export async function GET(
 request: NextRequest,
 { params }: { params: Promise<{ slug: string }> }
): Promise<NextResponse> {
 try {
   const { slug } = await params
   // ...rest of the handler
 } catch (error) {
   // error handling
 }
}`}</CodeBlock>
      <h2>{`Key changes explained`}</h2>
      <ol>
        <li>
          <strong>{`Promise Type: `}</strong>
          {`The `}
          <code>params</code>
          {` object is now typed as a Promise:
		`}
          <CodeBlock
            language="typescript"
            fileName="route.ts"
            disableLineNumbers
          >{`{ params: Promise<{ slug: string }> }`}</CodeBlock>
        </li>
        <li>
          <strong>{`Await Parameters: `}</strong>
          {`You must await the `}
          <code>{`params`}</code>
          {` before accessing any parameter properties:`}
          <CodeBlock
            language="typescript"
            fileName="route.ts"
            disableLineNumbers
          >{`// Destructure specific parameters
const { slug } = await params

// Get all resolved parameters at once
const resolvedParams = await params`}</CodeBlock>
        </li>
      </ol>
      <h2>{`Verification`}</h2>
      <p>{`After implementing these changes, your Next.js build should be completed successfully. You should see output similar to:`}</p>
      <CodeBlock language="bash" fileName="Command line" disableLineNumbers>{`> next build

   ▲ Next.js 15.0.3
   - Environments: .env

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types    
 ✓ Collecting page data    
 ✓ Generating static pages (11/11)
 ✓ Collecting build traces    
 ✓ Finalizing page optimization    

Route (app)                                Size     First Load JS
┌ ○ /                                      174 B           109 kB
├ ○ /_not-found                            897 B           101 kB
├ ○ /admin                                 1.26 kB         101 kB
├ ƒ /api/articles                          142 B           100 kB
├ ƒ /api/articles/[slug]                   142 B           100 kB
├ ƒ /api/regenerate                        142 B           100 kB
└ ● /articles/[slug]                       174 B           109 kB
    ├ /articles/created-from-my-phone
    ├ /articles/generated-without-vs-code
    ├ /articles/article-two
    └ /articles/article-one
+ First Load JS shared by all              99.9 kB
  ├ chunks/0759e794-56e8ed065b5f0a78.js    52.5 kB
  ├ chunks/743-7bb82a2990e2d984.js         45.6 kB
  └ other shared chunks (total)            1.88 kB


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand

dan@Dans-MacBook-Pro incremental-regeneration % `}</CodeBlock>
      <h2>{`Additional Notes`}</h2>
      <ul>
        <li>{`This change affects all dynamic API routes in Next.js 15`}</li>
        <li>{`The Promise typing allows for better handling of asynchronous route parameter resolution`}</li>
        <li>{`Make sure to handle Promise rejection cases in your error handling properly`}</li>
        <li>{`This approach works with both single and multiple dynamic segments`}</li>
      </ul>
      <p>{`By following this updated typing pattern, you'll resolve the export type error and ensure your dynamic API routes work correctly in Next.js 15.`}</p>
    </ArticleLayout>
  )
}
