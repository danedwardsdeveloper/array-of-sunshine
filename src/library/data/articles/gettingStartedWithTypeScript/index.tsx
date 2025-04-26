import { CodeBlock } from '@/components/Code'
import { AdditionalImage } from '@/components/Images'
import StyledLink from '@/components/StyledLink'
import { september, tags } from '@/library/constants'
import { createDate } from '@/library/utilities'
import type { Article } from '@/types'
import featuredImage from '@public/images/getting-started-with-typescript-a-super-fast-guide.png'
import consoleOutput from './console-output.webp'

export const gettingStartedWithTypeScript: Article = {
	publishedAt: createDate(12, september, 2024),
	metaTitle: 'Getting started with TypeScript: a super fast guide',
	displayTitle: 'Getting started with TypeScript: a super fast guide',
	metaDescription:
		'A fast guide to setting up a TypeScript project with minimal configuration, including project structure and basic TypeScript usage.',
	tags: [tags.typescript],
	featuredImage,
	slug: 'getting-started-with-typescript-a-super-fast-guide',
	content: (
		<>
			<p>{`In this guide, I'll show you how to set up a TypeScript project with minimal configuration. Let's get started:`}</p>
			<h2>Project structure</h2>
			<CodeBlock language="plaintext" fileName="File tree" disableLineNumbers>{`TypeScriptProject/
├── node_modules/  (Generated automatically)
│   └── ...
├── index.js       (Generated automatically)
├── index.ts
├── nodemon.json
├── package.json   (Generated automatically)
├── pnpm-lock.yaml (Generated automatically)
└── tsconfig.json  (Generated automatically or manually)`}</CodeBlock>

			<h2>Create a project folder</h2>
			<p>
				Create a folder called <code>TypeScriptProject</code> or whatever, open it up in your editor, and open up a terminal at the project
				root.
			</p>

			<h2>Initialise the project</h2>
			<p>
				{`I'll be using `}
				<StyledLink href="https://www.npmjs.com/package/pnpm" ariaLabel="PNPM: Performant Node Package Manager, NPM">
					pnpm
				</StyledLink>{' '}
				for this project.
			</p>
			<CodeBlock language="bash" fileName="Command line" disableLineNumbers>
				pnpm init
			</CodeBlock>

			<h2>Install dependencies</h2>
			<CodeBlock language="bash" fileName="Command line" disableLineNumbers>
				pnpm add -D typescript tsx nodemon
			</CodeBlock>
			<p>
				Used together, <code>tsx</code> (TypeScript Executor) and <code>nodemon</code> allow you to run your application without compiling,
				and restart it automatically whenever you make changes - like a live server.
			</p>
			<p>
				<code>ts-node</code>
				{` is another package that is supposed to do the same thing, but it's
        much harder to configure, and in my experience at least, never works.`}
			</p>
			<p>
				{`Compared to other npm packages, TypeScript is quite a large one (currently 22.5 MB), so don't be
        surprised if it takes longer than usual to download.`}
			</p>

			<h2>Create a tsconfig.json</h2>
			<p>
				Either create one manually or run <code>pnpm exec tsc --init</code>
				{`, which will create one
        for you, albeit with a ton of comments that explain all the settings. Here's the current default with
        the comments removed.`}
			</p>
			<CodeBlock language="json" fileName="tsconfig.json">{`{
	"compilerOptions": {
		"target": "es2016",
		"module": "commonjs",
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"strict": true,
		"skipLibCheck": true
	}
}`}</CodeBlock>

			<h2>Create a nodemon.json</h2>
			<CodeBlock language="json" fileName="nodemon.json">{`{
	"watch": ["index.ts"],
	"ext": "ts,json",
	"exec": "tsx index.ts"
}`}</CodeBlock>
			<p>This file tells nodemon what to do with the files in your project.</p>

			<h2>Add scripts to package.json</h2>
			<CodeBlock language="json" fileName="package.json">{`{
	"name": "type-script-project",
	"main": "index.js",
	"scripts": {
		"dev": "nodemon",
		"build": "tsc",
		"start": "node index.js"
	},
	"devDependencies": {
		"nodemon": "^3.1.4",
		"tsx": "^4.19.1",
		"typescript": "^5.6.2"
	}
}`}</CodeBlock>
			<ul>
				<li>
					The <code>dev</code> script uses nodemon as a live server for our application, which will restart when we make changes
				</li>
				<li>
					The <code>build</code> script will compile our TypeScript files into plain JavaScript
				</li>
				<li>
					The <code>start</code> script will run our application using the compiled JavaScript file as the entry point
				</li>
			</ul>

			<h2>Write some TypeScript</h2>
			<CodeBlock language="tsx" fileName="index.ts">{`interface Quote {
	author: string;
	content: string;
}

const quote: Quote = {
	author: 'Bram Stoker',
	content: 'We learn from failure, not from success!',
};

console.table(quote);`}</CodeBlock>
			<p>
				Now we can run <code>pnpm dev</code> to see the output
			</p>

			<h2>Compile JavaScript</h2>
			<p>
				Run <code>pnpm start</code>, and an <code>index.js</code> file will be created in the project root.
			</p>
			<CodeBlock language="javascript" fileName="index.js">{`"use strict";
const quote = {
    author: 'Bram Stoker',
    content: 'We learn from failure, not from success!',
};
console.table(quote);`}</CodeBlock>
			<p>
				The types have been erased, along with the empty lines, and <code>{`'use strict'`}</code> has been added. You can learn more about
				what this does{' '}
				<StyledLink href="https://www.w3schools.com/js/js_strict.asp" ariaLabel="W3 Schools: JavaScript Use Strict">
					here
				</StyledLink>
				.
			</p>

			<h2>Run the JavaScript</h2>
			<p>
				Now we can run our compiled script with <code>pnpm start</code>
			</p>
			<AdditionalImage image={consoleOutput} alt="The console output of a TypeScript file that has been compiled to JavaScript" />
			<p>
				{`And that's it! Hopefully that helped. One more bonus tip: if you want to write some tests for your
        TypeScript application, I recommend using `}
				<StyledLink href="https://www.npmjs.com/package/vitest" ariaLabel="Vitest package, NPM">
					Vitest
				</StyledLink>
				, which is a powerful testing framework that works beautifully with TypeScript.
			</p>
		</>
	),
}
