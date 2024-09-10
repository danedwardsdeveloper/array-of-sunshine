'use client';
import { useState, useRef } from 'react';

export default function CodeBlock(props: any) {
	const textInput = useRef<any>(null);
	const [copied, setCopied] = useState(false);

	const onCopy = () => {
		setCopied(true);
		navigator.clipboard.writeText(textInput?.current?.textContent);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<div className="relative right-[20px] top-[20px]">
			<span ref={textInput} className="hidden">
				{props.children}
			</span>
			<button
				aria-label="Copy code"
				type="button"
				className="h-4 w-4"
				onClick={onCopy}
			>
				{copied ? '✅' : '📋'}
			</button>
		</div>
	);
}
