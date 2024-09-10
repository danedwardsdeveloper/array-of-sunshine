// import Link from 'next/link';
// import Image, { ImageProps } from 'next/image';
// import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
// import { highlight } from 'sugar-high';
// import React, { ReactNode } from 'react';
// import { ComponentType } from 'react';

// import CodeBlock from './CodeBlock';

// interface TableProps {
// 	data: {
// 		headers: string[];
// 		rows: (string | number)[][];
// 	};
// }

// function Table({ data }: TableProps) {
// 	let headers = data.headers.map((header, index) => (
// 		<th key={index}>{header}</th>
// 	));
// 	let rows = data.rows.map((row, index) => (
// 		<tr key={index}>
// 			{row.map((cell, cellIndex) => (
// 				<td key={cellIndex}>{cell}</td>
// 			))}
// 		</tr>
// 	));

// 	return (
// 		<table>
// 			<thead>
// 				<tr>{headers}</tr>
// 			</thead>
// 			<tbody>{rows}</tbody>
// 		</table>
// 	);
// }

// type CustomLinkProps = {
// 	href: string;
// 	children: ReactNode;
// } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

// const CustomLink: React.FC<CustomLinkProps> = ({
// 	href,
// 	children,
// 	...props
// }) => {
// 	if (href.startsWith('/')) {
// 		return (
// 			<Link href={href} {...props}>
// 				{children}
// 			</Link>
// 		);
// 	}

// 	if (href.startsWith('#')) {
// 		return (
// 			<a href={href} {...props}>
// 				{children}
// 			</a>
// 		);
// 	}

// 	return (
// 		<a href={href} target="_blank" rel="noopener noreferrer" {...props}>
// 			{children}
// 		</a>
// 	);
// };

// const RoundedImage: React.FC<ImageProps> = (props) => {
// 	return <Image className="rounded-lg" {...props} alt={props.alt || ''} />;
// };

// interface CodeProps extends React.HTMLAttributes<HTMLElement> {
// 	children: string;
// }

// const Code: React.FC<CodeProps> = ({ children, ...props }) => {
// 	let codeHTML = highlight(children);
// 	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
// };

// function slugify(str: string): string {
// 	return str
// 		.toString()
// 		.toLowerCase()
// 		.trim()
// 		.replace(/\s+/g, '-')
// 		.replace(/&/g, '-and-')
// 		.replace(/[^\w\-]+/g, '')
// 		.replace(/\-\-+/g, '-');
// }

// function createHeading(level: number): React.FC<{ children: ReactNode }> {
// 	const Heading: React.FC<{ children: ReactNode }> = ({ children }) => {
// 		let slug = slugify(children as string);
// 		return React.createElement(
// 			`h${level}`,
// 			{ id: slug },
// 			[
// 				React.createElement('a', {
// 					href: `#${slug}`,
// 					key: `link-${slug}`,
// 					className: 'anchor',
// 				}),
// 			],
// 			children
// 		);
// 	};

// 	Heading.displayName = `Heading${level}`;

// 	return Heading;
// }

// const components = {
// 	h1: createHeading(1),
// 	h2: createHeading(2),
// 	h3: createHeading(3),
// 	h4: createHeading(4),
// 	h5: createHeading(5),
// 	h6: createHeading(6),
// 	Image: RoundedImage,
// 	a: CustomLink,
// 	code: CodeBlock,
// 	pre: CodeBlock,
// 	Table,
// };

// export function CustomMDX(props: MDXRemoteProps) {
// 	return (
// 		<MDXRemote
// 			{...props}
// 			components={{ ...(props.components || {}), ...components }}
// 		/>
// 	);
// }
