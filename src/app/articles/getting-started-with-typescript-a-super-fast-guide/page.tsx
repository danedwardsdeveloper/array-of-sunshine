import { Metadata } from 'next';

import { article } from './data';
import { generateArticleMetadata } from '@/library/metadata';
import { ArticleLayout } from '@/components/ArticleLayout';
import { CodeBlock, InlineCode } from '@/components/Code';
import StyledLink from '@/components/StyledLink';
import Paragraph from '@/components/Paragraph';
import { Heading2 } from '@/components/Headings';
import { AdditionalImage } from '@/components/Images';
import { UnorderedList, ListItem } from '@/components/Lists';

import gettingStarted from '../../../../public/images/regular-webp/getting-started-with-typescript.webp';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata(article);
};

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph>{`In this guide, I'll show you how to set up a TypeScript project with minimal configuration. Let's get started:`}</Paragraph>
			<Heading2>Project structure</Heading2>
			<CodeBlock
				language="plaintext"
				fileName="File tree"
				disableLineNumbers
			>{`TypeScriptProject/
├── node_modules/  (Generated automatically)
│   └── ...
├── index.js       (Generated automatically)
├── index.ts
├── nodemon.json
├── package.json   (Generated automatically)
├── pnpm-lock.yaml (Generated automatically)
└── tsconfig.json  (Generated automatically or manually)`}</CodeBlock>

			<Heading2>Create a project folder</Heading2>
			<Paragraph>
				Create a folder called <InlineCode>TypeScriptProject</InlineCode> or
				whatever, open it up in your editor, and open up a terminal at the
				project root.
			</Paragraph>

			<Heading2>Initialise the project</Heading2>
			<Paragraph>
				I'll be using{' '}
				<StyledLink
					href="https://www.npmjs.com/package/pnpm"
					ariaLabel="PNPM: Performant Node Package Manager, NPM"
				>
					pnpm
				</StyledLink>{' '}
				for this project.
			</Paragraph>
			<CodeBlock language="bash" fileName="Command line" disableLineNumbers>
				pnpm init
			</CodeBlock>

			<Heading2>Install dependencies</Heading2>
			<CodeBlock language="bash" fileName="Command line" disableLineNumbers>
				pnpm add -D typescript tsx nodemon
			</CodeBlock>
			<Paragraph>
				Used together, <InlineCode>tsx</InlineCode> (TypeScript Executor)
				and <InlineCode>nodemon</InlineCode> allow you to run your
				application without compiling, and restart it automatically whenever
				you make changes - like a live server.
			</Paragraph>
			<Paragraph>
				<InlineCode>ts-node</InlineCode> is another package that is supposed
				to do the same thing, but it's much harder to configure, and in my
				experience at least, never works.
			</Paragraph>
			<Paragraph>
				Compared to other npm packages, TypeScript is quite a large one
				(currently 22.5 MB), so don't be surprised if it takes longer than
				usual to download.
			</Paragraph>

			<Heading2>Create a tsconfig.json</Heading2>
			<Paragraph>
				Either create one manually or run{' '}
				<InlineCode>pnpm exec tsc --init</InlineCode>, which will create one
				for you, albeit with a ton of comments that explain all the
				settings. Here's the current default with the comments removed.
			</Paragraph>
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

			<Heading2>Create a nodemon.json</Heading2>
			<CodeBlock language="json" fileName="nodemon.json">{`{
	"watch": ["index.ts"],
	"ext": "ts,json",
	"exec": "tsx index.ts"
}`}</CodeBlock>
			<Paragraph>
				This file tells nodemon what to do with the files in your project.
			</Paragraph>

			<Heading2>Add scripts to package.json</Heading2>
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
			<UnorderedList>
				<ListItem>
					The <InlineCode>dev</InlineCode> script uses nodemon as a live
					server for our application, which will restart when we make
					changes
				</ListItem>
				<ListItem>
					The <InlineCode>build</InlineCode> script will compile our
					TypeScript files into plain JavaScript
				</ListItem>
				<ListItem>
					The <InlineCode>start</InlineCode> script will run our
					application using the compiled JavaScript file as the entry point
				</ListItem>
			</UnorderedList>

			<Heading2>Write some TypeScript</Heading2>
			<CodeBlock language="tsx" fileName="index.ts">{`interface Quote {
	author: string;
	content: string;
}

const quote: Quote = {
	author: 'Bram Stoker',
	content: 'We learn from failure, not from success!',
};

console.table(quote);`}</CodeBlock>
			<Paragraph>
				Now we can run <InlineCode>pnpm dev</InlineCode> to see the output
			</Paragraph>

			<Heading2>Compile JavaScript</Heading2>
			<Paragraph>
				Run <InlineCode>pnpm start</InlineCode>, and an{' '}
				<InlineCode>index.js</InlineCode> file will be created in the
				project root.
			</Paragraph>
			<CodeBlock language="javascript" fileName="index.js">{`"use strict";
const quote = {
    author: 'Bram Stoker',
    content: 'We learn from failure, not from success!',
};
console.table(quote);`}</CodeBlock>
			<Paragraph>
				The types have been erased, along with the empty lines, and{' '}
				<InlineCode>"use strict"</InlineCode> has been added. You can learn
				more about what this does{' '}
				<StyledLink
					href="https://www.w3schools.com/js/js_strict.asp"
					ariaLabel="W3 Schools: JavaScript Use Strict"
				>
					here
				</StyledLink>
				.
			</Paragraph>

			<Heading2>Run the JavaScript</Heading2>
			<Paragraph>
				Now we can run our compiled script with{' '}
				<InlineCode>pnpm start</InlineCode>
			</Paragraph>
			<AdditionalImage
				image={gettingStarted}
				alt="The console output of a TypeScript file that has been compiled to JavaScript"
			></AdditionalImage>
			<Paragraph>
				And that's it! Hopefully that helped. One more bonus tip: if you
				want to write some tests for your TypeScript application, I
				recommend using{' '}
				<StyledLink
					href="https://www.npmjs.com/package/vitest"
					ariaLabel="Vitest package, NPM"
				>
					Vitest
				</StyledLink>
				, which is a powerful testing framework that works beautifully with
				TypeScript.
			</Paragraph>
		</ArticleLayout>
	);
}
