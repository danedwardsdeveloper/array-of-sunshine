declare module '*.mdx' {
	import type { ReactNode } from 'react';

	export const article: {
		writer: string;
		date: string;
		title: string;
		description: string;
		tags: string;
		keywords: string;
	};

	export const metadata: {
		title: string;
		description: string;
	};

	const MDXComponent: (props: any) => ReactNode;
	export default MDXComponent;
}

// This file is supposed to enable IDE type support for the .mdx articles but it doesn't work
