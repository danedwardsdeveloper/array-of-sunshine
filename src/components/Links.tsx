import { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface LinkProps {
	href: string;
	ariaLabel: string;
	children: ReactNode;
	className?: string;
}

const baseStyles =
	'underline underline-offset-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';

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
					'text-gray-600',
					'hover:text-gray-500',
					className
				)}
				aria-label={ariaLabel}
			>
				{children}
				<span className="sr-only">(opens in a new tab)</span>
			</Link>
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
		</span>
	);
}
