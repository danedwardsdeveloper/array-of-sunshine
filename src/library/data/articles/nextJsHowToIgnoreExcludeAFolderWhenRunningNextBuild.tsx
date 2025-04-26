import { CodeBlock } from '@/components/Code'
import { october, tags } from '@/library/constants'
import { createDate } from '@/library/utilities'
import type { Article } from '@/types'
import featuredImage from '@public/images/next-js-how-to-ignore-exclude-a-folder-when-running-next-build.png'

export const nextJsHowToIgnoreExcludeAFolderWhenRunningNextBuild: Article = {
	publishedAt: createDate(22, october, 2024),
	displayTitle: `Next.js: how to ignore/exclude a folder when running "next build"`,
	metaTitle: `Next.js: how to ignore/exclude a folder when running "next build"`,
	metaDescription:
		'Learn how to configure Next.js to ignore or exclude specific folders or directories during build time using tsconfig.json.',
	tags: [tags.nextJs],
	featuredImage: featuredImage,
	borderOnFeaturedImage: true,
	slug: 'next-js-how-to-ignore-exclude-a-folder-when-running-next-build',
	content: (
		<>
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
				{'Here, the '}
				<code>node_modules</code>
				{` folder is ignored as
				usual, and my `}
				<code>misc</code>
				{' and '}
				<code>work-in-progress</code>
				{' folders (in the root directory) will be ignored too. '}
			</p>
			<p>{`That's it! Next.js will now ignore these folders during the build process.`}</p>
		</>
	),
}
