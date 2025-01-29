import { generateArticleMetadata } from '@/library/articleMetadata'

import { ArticleLayout } from '../_components/ArticleLayout'
import { CodeBlock } from '@/app/articles/_components/Code'
import { AdditionalImage } from '@/app/articles/_components/Images'
import StyledLink from '@/components/StyledLink'

import { article } from './data'

import perfectLighthouseScore from './images/perfect-lighthouse-scores.png'
import robotsShowsInBrowser from './images/robots-shows-in-browser.png'

export const metadata = generateArticleMetadata(article)

export default function Page() {
  return (
    <ArticleLayout article={article} borderOnFeaturedImage>
      <p>
        {`If you're using an `}
        <code>{`app/robots.ts`}</code>
        {` to generate your  `}
        <code>{`robots.txt`}</code>
        {` file, you might encounter an issue where
        Google Lighthouse reports that it can't download your `}
        <code>{`robots.txt`}</code>
        {` file, even though it's accessible
        from your browser.`}
      </p>

      <p className="text-red-600 font-medium italic">
        {`Lighthouse was unable to download a robots.txt file.`}
      </p>

      <p>
        {`As Lighthouse will knock off a few SEO points if it can't find the file, it can be frustrating when
        trying to achieve perfect scores for your Next.js application.`}
      </p>

      <h2>The Problem</h2>

      <p>
        {`When using the App Router's metadata API with an `}
        <code>{`app/robots.ts`}</code> {` file like this:`}
      </p>

      <CodeBlock language="typescript" fileName="app/robots.ts">{`import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  }
}`}</CodeBlock>

      <p>
        {`You might find that while the file is accessible at `}
        <code>{`/robots.txt`}</code>
        {` and displays correctly in
        your browser, Lighthouse still complains that it "was unable to download a robots.txt file."`}
      </p>

      <AdditionalImage
        image={robotsShowsInBrowser}
        border
        alt="Lighthouse may not be able to download your robots.txt file, even though you can see it in the browser"
      />

      <h2>Why This Happens</h2>

      <p>
        {`The issue occurs because Lighthouse attempts to fetch the robots.txt file by running a script from
        your site's root. However, Next.js's default Content Security Policy (CSP) settings can block this
        request. Specifically, Lighthouse's audit can't work with restrictive `}
        <code>connect-src</code>
        {` CSP directives.`}
      </p>

      <h2>The Solution</h2>

      <p>
        {`To fix this issue, modify your Next.js configuration to allow Lighthouse to fetch the robots.txt file.
        Here's how to do it in your `}
        <code>{`next.config.ts`}</code>:
      </p>

      <CodeBlock language="typescript" fileName="next.config.ts">{`import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Your existing config options...
  output: 'standalone',

  // Add this headers configuration
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "connect-src 'self'; script-src 'none'; object-src 'none'; frame-src 'none'"
          }
        ]
      }
    ]
  }
}

export default nextConfig`}</CodeBlock>

      <p>This configuration:</p>
      <ol>
        <li>Only applies to the robots.txt route, maintaining strict CSP settings elsewhere</li>
        <li>
          Allows <code>connect-src</code> requests to your domain
        </li>
        <li>Disables unnecessary script, object, and frame sources for this route</li>
      </ol>

      <h2>Security Considerations</h2>

      <p>This solution is secure because:</p>
      <ul>
        <li>
          {`It only modifies the CSP for the `}
          <code>{`robots.txt`}</code>
          {` route`}
        </li>
        <li>
          {`It only allows connections to your domain: `}
          <code>{`'self'`}</code>
        </li>
        <li>It explicitly disables other potentially risky sources</li>
        <li>Your main application maintains its original strict CSP settings</li>
      </ul>

      <AdditionalImage image={perfectLighthouseScore} alt="" border />

      <h2>Verifying the Fix</h2>

      <p>After deploying these changes:</p>
      <ol>
        <li>
          {`Your `}
          <code>{`robots.txt`}</code>
          {` file should still be accessible in the browser`}
        </li>
        <li>
          {`Lighthouse should now be able to download and verify your `}
          <code>{`robots.txt`}</code>
          {` file`}
        </li>
        <li>Your Lighthouse scores should improve if this was affecting them</li>
      </ol>

      <p>
        By implementing this fix, you maintain both security and optimal Lighthouse performance for your
        Next.js application.
      </p>

      <p>
        {`Feel free to use my `}
        <StyledLink href="https://github.com/danedwardsdeveloper/next-configuration">{`Next.js configuration template`}</StyledLink>
        {`, too - it's much more comprehensive than `}
        <code>{`create-next-app`}</code>
      </p>
    </ArticleLayout>
  )
}
