'use client';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
	children: string;
	className?: string;
	filename?: string;
}

export default function CodeBlock({
	children,
	className,
	filename,
}: CodeBlockProps) {
	const [isCopied, setIsCopied] = useState(false);
	const language = className ? className.replace(/language-/, '') : '';

	const copyToClipboard = () => {
		navigator.clipboard.writeText(children);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<div className="relative mt-4 rounded-lg overflow-hidden">
			<div className="flex justify-between items-center bg-gray-800 px-4 py-2 text-white">
				<div className="flex items-center space-x-2">
					<span className="text-sm font-mono">{language}</span>
					{filename && (
						<span className="text-sm text-gray-400">| {filename}</span>
					)}
				</div>
				<button
					onClick={copyToClipboard}
					className="text-sm flex items-center space-x-1 hover:text-blue-400 transition-colors"
				>
					{isCopied ? '✅' : '📋'}
					<span>{isCopied ? 'Copied!' : 'Copy'}</span>
				</button>
			</div>
			<SyntaxHighlighter
				language={language}
				style={coldarkDark}
				customStyle={{ margin: 0, padding: '1rem' }}
			>
				{children}
			</SyntaxHighlighter>
		</div>
	);
}
