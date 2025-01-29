import { generateArticleMetadata } from '@/library/articleMetadata'

import { ArticleLayout } from '../_components/ArticleLayout'
import { CodeBlock } from '@/app/articles/_components/Code'

import { article } from './data'

export const metadata = generateArticleMetadata(article)

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        {`You're not alone if you encounter MIME type errors while working with React. These errors can be
        frustrating, but they're often easily solved. In this article, I'll explore common MIME type errors in
        React applications and provide practical solutions.`}
      </p>

      <h2>Common MIME Type Errors in React</h2>

      <p>Two frequent MIME type errors you might encounter are:</p>

      <CodeBlock fileName="Browser console" language="plaintext" disableLineNumbers>
        {`Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/octet-stream". Strict MIME type checking is enforced for module scripts per HTML spec. main.jsx:1

Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec. app.tsx:1`}
      </CodeBlock>

      <h2>First, check your build/ dist files</h2>

      <p>
        {`A typical build for a simple React site should result in optimized, production-ready files. After
        running the build process, you'll generally find a `}
        <code>dist</code> or <code>build</code>
        {` directory containing these files.
        Whether you've used TypeScript, Tailwind, Less, or other libraries and packages, the output should
        boil down to three main files: an index.html (the entry point), a CSS file, and a plain JavaScript
        file. However, you could have more files, depending on your bundler and the complexity of your
        project.`}
      </p>

      <p>
        {`The main CSS and JavaScript files will be minified (read: a chaotic hell of baffling code), and the
        filename will contain an 8-character hash, which ensures that browsers won't try to use old cached
        versions of your styles and scripts. Here's the build structure for a typical small project.`}
      </p>

      <CodeBlock fileName="Vite React project structure" language="plaintext" disableLineNumbers>
        {`dist/
├── assets/
│   ├── index-ABCD1234_.css
│   └── index-DdzUmU42.js
├── image.webp
├── favicon.svg
└── index.html`}
      </CodeBlock>

      <h2>Solution: Remove .JSX extensions from source code import statements</h2>

      <p>
        The most common cause of these errors is really annoyingly simple, which is what motivated me to write
        this article.
      </p>

      <CodeBlock fileName="Console error" language="plaintext" disableLineNumbers>
        {`index-fWGo7SiS.js:1 Failed to load module`}
      </CodeBlock>

      <p className="bg-green-200">
        If you encounter a MIME type error in the console referencing a specific file, e.g.,{' '}
        <code>App.tsx:1</code>, search your entire codebase for instances where you (or your IDE) might have
        unintentionally added the <code>.tsx</code>, <code>.tsx</code>, or <code>.ts</code>
        extensions to your imports.
      </p>

      <p>
        In Visual Studio Code, use <code>Shift Command F</code> on a Mac, or <code>Shift Ctrl F</code> on
        Windows to perform a project-wide search.
      </p>

      <p>
        {`I love using Vite - it's fantastic and well-maintained (`}
        <code>create-react-app</code> was depreciated on June 23, 2023). Still, these errors could be avoided
        altogether if import file extensions were enforced. Other frameworks like Next.js do enforce this
        using ESLint.
      </p>

      <h2>File Extensions in React: Best Practices</h2>

      <p>{`Here's an example demonstrating best practices:`}</p>

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

      <p>
        By understanding these common issues and following best practices for file extensions, you can avoid
        MIME type errors in your React applications.
      </p>
    </ArticleLayout>
  )
}
