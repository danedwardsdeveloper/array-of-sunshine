'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';

interface CodeBlockProps extends Omit<SyntaxHighlighterProps, 'language'> {
	language:
		| 'javascript'
		| 'typescript'
		| 'html'
		| 'css'
		| 'tsx'
		| 'jsx'
		| 'plaintext'
		| 'bash'
		| 'json'
		| 'mjs';
	fileName: string;
	disableLineNumbers?: boolean;
}

type LanguageFormatting = {
	[key: string]: string;
};

const languageFormats: LanguageFormatting = {
	typescript: 'TypeScript',
	javascript: 'JavaScript',
	jsx: 'JSX',
	tsx: 'TSX',
	mjs: 'MJS',
	html: 'HTML',
	css: 'CSS',
	scss: 'SCSS',
	less: 'Less',
	json: 'JSON',
	yaml: 'YAML',
	markdown: 'Markdown',
	php: 'PHP',
	csharp: 'C#',
	cpp: 'C++',
};

function formatLanguage(language: string): string {
	return languageFormats[language];
}

const mapLanguage = (lang: string) => {
	if (lang === 'mjs') return 'javascript';
	return lang;
};

export const InlineCode = ({
	children,
	...props
}: React.HTMLAttributes<HTMLElement>) => (
	<code
		className="text-sm border  border-gray-200 bg-gray-100 text-black rounded px-2 py-0.5 font-mono break-words"
		{...props}
	>
		{children}
	</code>
);

export const CodeBlock = ({
	language,
	fileName,
	disableLineNumbers = false,
	children,
	...props
}: CodeBlockProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopyClick = () => {
		if (typeof children === 'string') {
			navigator.clipboard.writeText(children.trim());
			setCopied(true);
			setTimeout(() => {
				setCopied(false);
			}, 2000);
		}
	};

	return (
		<div className={clsx('rounded-lg', 'border  border-gray-200', 'my-4')}>
			<div
				className={clsx(
					'flex justify-between items-center',
					'pl-5 pr-2',
					'h-12',
					' bg-gray-100',
					'rounded-t-lg',
					'border-b border-b-gray-200'
				)}
			>
				<div>
					<span className="text-sm text-gray-500 dark:text-gray-400">
						{fileName}
					</span>
				</div>
				<div className="flex items-center">
					<span className="text-base text-center text-gray-500 mr-2">
						{formatLanguage(language)}
					</span>
					<button
						onClick={handleCopyClick}
						aria-label="Copy code"
						className={clsx(
							'flex items-center',
							'rounded',
							'hover:opacity-80'
						)}
					>
						<span className="text-2xl relative w-8 h-8 flex items-center justify-center">
							<span
								className={clsx(
									'absolute transition-all duration-200 ease-in-out',
									copied
										? 'opacity-100 transform'
										: 'opacity-0 transform'
								)}
							>
								✅
							</span>
							<span
								className={clsx(
									'absolute transition-all duration-200 ease-in-out',
									!copied
										? 'opacity-100 transform'
										: 'opacity-0 transform'
								)}
							>
								📋
							</span>
						</span>
					</button>
				</div>
			</div>
			<SyntaxHighlighter
				language={mapLanguage(language)}
				showLineNumbers={!disableLineNumbers}
				className={clsx('overflow-x-auto', 'text-sm', 'rounded-b-md')}
				style={{
					...oneLight,
					'pre[class*="language-"]': {
						...oneLight['pre[class*="language-"]'],
						background: 'transparent',
						margin: 0,
						padding: 20,
						borderTopLeftRadius: 0,
						borderTopRightRadius: 0,
					},
					'code[class*="language-"]': {
						...oneLight['code[class*="language-"]'],
						background: 'transparent',
					},
					'react-syntax-highlighter-line-number': {
						fontStyle: 'normal',
						paddingRight: 20,
						color: '#9ca3af',
					},
				}}
				{...props}
			>
				{typeof children === 'string' ? children.trim() : ''}
			</SyntaxHighlighter>
		</div>
	);
};
