import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface LinkProps {
	href: string;
	ariaLabel: string;
	children: ReactNode;
	className?: string;
}

const baseStyles =
	'underline underline-offset-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';

function Tooltip({ content }: { content: string }) {
	return (
		<span className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-gray-500 shadow text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-40">
			{content}
		</span>
	);
}

export function ExternalLink({
	href,
	children,
	className,
	ariaLabel,
}: LinkProps) {
	return (
		<span className="relative group inline-block">
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={clsx(
					baseStyles,
					'text-blue-600',
					'hover:text-blue-500',
					className
				)}
				aria-label={ariaLabel}
			>
				{children}
				<span className="sr-only">(opens in a new tab)</span>
			</Link>
			<Tooltip content={`${ariaLabel} | Opens in a new tab`} />
		</span>
	);
}

export function InternalLink({
	href,
	children,
	className,
	ariaLabel,
}: LinkProps) {
	return (
		<span className="relative group inline-block">
			<Link
				href={href}
				className={clsx(
					baseStyles,
					'text-gray-600',
					'hover:text-gray-500',
					className
				)}
				aria-label={ariaLabel}
			>
				{children}
			</Link>
			<Tooltip content={ariaLabel} />
		</span>
	);
}
