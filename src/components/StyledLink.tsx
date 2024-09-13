import { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface StyledLinkProps {
	href: string;
	ariaLabel: string;
	className?: string;
	children: ReactNode;
}

const baseStyles = [
	'relative group inline-block',
	'underline underline-offset-2',
	'transition-colors duration-200',
	'focus:outline-none focus:ring-2',
	'focus:ring-blue-500 focus:ring-offset-2',
	'text-gray-600 hover:text-gray-500',
];

export default function StyledLink({
	href,
	ariaLabel,
	className,
	children,
}: StyledLinkProps) {
	const isExternal = href.startsWith('http') || href.startsWith('//');

	const targetRelationProps = isExternal
		? { target: '_blank', rel: 'noopener noreferrer' }
		: {};

	return (
		<Link
			href={href}
			className={clsx(baseStyles, className)}
			aria-label={ariaLabel}
			{...targetRelationProps}
		>
			{children}
			{isExternal && <span className="sr-only">(opens in a new tab)</span>}
		</Link>
	);
}
