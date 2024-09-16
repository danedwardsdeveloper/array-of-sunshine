import { Metadata } from 'next';

import { article } from './data';
import { generateArticleMetadata } from '@/library/metadata';
import { ArticleLayout } from '@/components/ArticleLayout';
import { CodeBlock, InlineCode } from '@/components/Code';
import Paragraph from '@/components/Paragraph';
import { Heading2 } from '@/components/Headings';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata(article);
};

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph>
				You're not alone if you encounter MIME type errors while working
				with React. These errors can be frustrating, but they're often
				easily solved. In this article, I'll explore common MIME type errors
				in React applications and provide practical solutions.
			</Paragraph>

			<Heading2>Common MIME Type Errors in React</Heading2>

			<Paragraph>
				Two frequent MIME type errors you might encounter are:
			</Paragraph>

			<CodeBlock
				fileName="Browser console"
				language="plaintext"
				disableLineNumbers
			>
				{`Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/octet-stream". Strict MIME type checking is enforced for module scripts per HTML spec. main.jsx:1

Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec. app.tsx:1`}
			</CodeBlock>

			<Heading2>First, check your build/ dist files</Heading2>

			<Paragraph>
				A typical build for a simple React site should result in optimized,
				production-ready files. After running the build process, you'll
				generally find a <InlineCode>dist</InlineCode> or{' '}
				<InlineCode>build</InlineCode> directory containing these files.
				Whether you've used TypeScript, Tailwind, Less, or other libraries
				and packages, the output should boil down to three main files: an
				index.html (the entry point), a CSS file, and a plain JavaScript
				file. However, you could have more files, depending on your bundler
				and the complexity of your project.
			</Paragraph>

			<Paragraph>
				The main CSS and JavaScript files will be minified (read: a chaotic
				hell of baffling code), and the filename will contain an 8-character
				hash, which ensures that browsers won't try to use old cached
				versions of your styles and scripts. Here's the build structure for
				a typical small project.
			</Paragraph>

			<CodeBlock
				fileName="Vite React project structure"
				language="plaintext"
				disableLineNumbers
			>
				{`dist/
├── assets/
│   ├── index-ABCD1234_.css
│   └── index-DdzUmU42.js
├── image.webp
├── favicon.svg
└── index.html`}
			</CodeBlock>

			<Heading2>
				Solution: Remove .JSX extensions from source code import statements
			</Heading2>

			<Paragraph>
				The most common cause of these errors is really annoyingly simple,
				which is what motivated me to write this article.
			</Paragraph>

			<CodeBlock
				fileName="Console error"
				language="plaintext"
				disableLineNumbers
			>
				{`index-fWGo7SiS.js:1 Failed to load module`}
			</CodeBlock>

			<Paragraph background="green">
				If you encounter a MIME type error in the console referencing a
				specific file, e.g., <InlineCode>App.tsx:1</InlineCode>, search your
				entire codebase for instances where you (or your IDE) might have
				unintentionally added the <InlineCode>.tsx</InlineCode>,{' '}
				<InlineCode>.tsx</InlineCode>, or <InlineCode>.ts</InlineCode>
				extensions to your imports.
			</Paragraph>

			<Paragraph>
				In Visual Studio Code, use <InlineCode>Shift Command F</InlineCode>{' '}
				on a Mac, or <InlineCode>Shift Ctrl F</InlineCode> on Windows to
				perform a project-wide search.
			</Paragraph>

			<Paragraph>
				I love using Vite - it's fantastic and well-maintained (
				<InlineCode>create-react-app</InlineCode> was depreciated on June
				23, 2023). Still, these errors could be avoided altogether if import
				file extensions were enforced. Other frameworks like Next.js do
				enforce this using ESLint.
			</Paragraph>

			<Heading2>File Extensions in React: Best Practices</Heading2>

			<Paragraph>Here's an example demonstrating best practices:</Paragraph>

			<CodeBlock fileName="MyComponent.tsx" language="tsx">
				{`// ✅
import React from 'react';
import MyComponent from './MyComponent'; // No extension
import { helperFunction } from './utils'; // No extension

// 🚫
import BadComponent from './BadComponent.jsx'; // Don't include .jsx
import { badHelper } from './badUtils.ts'; // Don't include .ts or .tsx

// ✅ Include the extension for CSS modules
import styles from './styles.module.css';

// ✅ Include the extension for non-JavaScript/TypeScript assets
import logo from './logo.svg';
import data from './data.json';

export default function App() {
    // Your component logic here
}`}
			</CodeBlock>

			<Paragraph>
				By understanding these common issues and following best practices
				for file extensions, you can avoid MIME type errors in your React
				applications.
			</Paragraph>
		</ArticleLayout>
	);
}
