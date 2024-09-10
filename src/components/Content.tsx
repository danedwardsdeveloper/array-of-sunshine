import Image from 'next/image';
import clsx from 'clsx';

interface ImageProps {
	src: string;
	alt: string;
	classes?: string;
}

function getImageSrc(src: string, isFeatured: boolean) {
	return isFeatured
		? `/images/social-png/${src}.png`
		: `/images/regular-webp/${src}.webp`;
}

const baseImageStyles = `rounded-md w-full h-auto`;
const baseContainerStyles = 'w-full';

export default {
	Heading1: ({
		children,
		...props
	}: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1 className="text-4xl font-bold mb-4 mt-8" {...props}>
			{children}
		</h1>
	),

	Heading2: ({
		children,
		...props
	}: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2 className="text-xl font-medium tracking-tight mt-6 mb-2" {...props}>
			{children}
		</h2>
	),

	Heading3: ({
		children,
		...props
	}: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3 className="text-2xl font-medium mb-2 mt-4" {...props}>
			{children}
		</h3>
	),

	Paragraph: ({
		children,
		...props
	}: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p className="my-4 text-neutral-800 dark:text-neutral-200" {...props}>
			{children}
		</p>
	),

	UnorderedList: ({
		children,
		...props
	}: React.HTMLAttributes<HTMLUListElement>) => (
		<ul className="list-disc pl-5 mb-4" {...props}>
			{children}
		</ul>
	),

	OrderedList: ({
		children,
		...props
	}: React.HTMLAttributes<HTMLOListElement>) => (
		<ol className="list-decimal pl-5 mb-4" {...props}>
			{children}
		</ol>
	),

	ListItem: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
		<li className="mb-2" {...props}>
			{children}
		</li>
	),

	Blockquote: ({
		children,
		...props
	}: React.HTMLAttributes<HTMLQuoteElement>) => (
		<blockquote
			className="border-l-4 border-gray-300 pl-4 italic my-4"
			{...props}
		>
			{children}
		</blockquote>
	),

	InlineCode: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<code
			className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm"
			{...props}
		>
			{children}
		</code>
	),

	CodeBlock: ({
		children,
		...props
	}: React.HTMLAttributes<HTMLPreElement>) => (
		<pre
			className="bg-gray-100 rounded p-4 overflow-x-auto mb-4 font-mono text-sm"
			{...props}
		>
			{children}
		</pre>
	),

	Link: ({
		children,
		href,
		...props
	}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
		<a href={href} className="text-blue-600 hover:underline" {...props}>
			{children}
		</a>
	),

	AdditionalImage: ({ src, alt, classes }: ImageProps) => {
		const imageSrc = getImageSrc(src, false);

		return (
			<div className={clsx(baseContainerStyles)}>
				<Image
					src={imageSrc}
					alt={alt}
					width={100}
					height={100}
					quality={100}
					loading="eager"
					className={clsx(baseImageStyles, classes)}
				/>
			</div>
		);
	},

	FeaturedImage: ({ src, alt, classes }: ImageProps) => {
		const imageSrc = getImageSrc(src, true);

		return (
			<div className={clsx(baseContainerStyles)}>
				<Image
					src={imageSrc}
					alt={alt}
					width={576}
					height={324}
					quality={100}
					loading="eager"
					className={clsx(baseImageStyles, classes)}
				/>
			</div>
		);
	},
};
