'use client';
import { useState, useRef } from 'react';
import clsx from 'clsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';

interface CodeBlockProps extends Omit<SyntaxHighlighterProps, 'language'> {
	language: 'javascript' | 'typescript' | 'html' | 'css' | 'tsx';
	commentedOutFileName: string;
}

export const InlineCode = ({
	children,
	...props
}: React.HTMLAttributes<HTMLElement>) => (
	<code
		className="text-base bg-gray-200 text-indigo-600 rounded px-1 py-0.5 font-mono"
		{...props}
	>
		{children}
	</code>
);

export const CodeBlock = ({
	language,
	commentedOutFileName,
	children,
	...props
}: CodeBlockProps) => {
	const [copied, setCopied] = useState(false);
	const [showTooltip, setShowTooltip] = useState(false);

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
		<div
			className={clsx(
				'rounded-none sm:rounded-md',
				'border-2  border-neutral-200',
				'bg-neutral-50',
				'sm:mx-0',
				'mx-[-1rem]',
				'sm:w-auto',
				'w-screen'
			)}
		>
			<div
				className={clsx(
					'flex justify-between items-center',
					'px-3 py-2',
					'bg-neutral-200'
				)}
			>
				<div>
					<span className="italic font-mono text-md text-gray-600 dark:text-gray-400">
						{commentedOutFileName}
					</span>
				</div>
				{showTooltip && !copied && (
					<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-gray-600 bg-gray-800 rounded shadow-lg">
						Copy code
					</div>
				)}
				<button
					onClick={handleCopyClick}
					onMouseEnter={() => setShowTooltip(true)}
					onMouseLeave={() => setShowTooltip(false)}
					aria-label="Copy code"
					className={clsx(
						'flex items-center',
						'px-2 py-1 space-x-1',
						'hover:opacity-80',
						'rounded'
					)}
				>
					<span className="text-base text-center">
						<span
							className={clsx(
								'inline-block',
								'transition-all duration-200 ease-in-out',
								'text-gray-600',
								copied || showTooltip
									? 'opacity-100 transform'
									: 'opacity-0 transform'
							)}
						>
							{copied ? 'Copied!' : showTooltip ? 'Copy code' : ''}
						</span>
					</span>
					<span className="text-2xl relative w-8 h-8 flex items-center justify-center">
						<span
							className={clsx(
								'absolute transition-all duration-200 ease-in-out',
								copied ? 'opacity-100 transform' : 'opacity-0 transform'
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
			<SyntaxHighlighter
				language={language}
				className={clsx(
					'rounded-lg overflow-x-auto',
					'py-2 pt-0 px-3',
					'text-base'
				)}
				style={oneLight}
				{...props}
			>
				{typeof children === 'string' ? children.trim() : ''}
			</SyntaxHighlighter>
		</div>
	);
};
