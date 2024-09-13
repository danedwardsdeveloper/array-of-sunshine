import clsx from 'clsx';

import { ArrowIcon } from './Icons';

interface FooterLink {
	href: string;
	content: string;
}

const footerLinks: FooterLink[] = [
	{ href: '/', content: 'Home' },
	{ href: 'https://danedwardsdeveloper.com/', content: 'Portfolio' },
	{ href: 'https://github.com/danedwardsdeveloper', content: 'GitHub' },
	{
		href: 'https://linkedin.com/in/danedwards-developer',
		content: 'LinkedIn',
	},
];

const FooterLink = ({ href, content }: FooterLink) => {
	const isExternal = href.startsWith('http');

	return (
		<li>
			<a
				className={clsx(
					'flex items-center transition-all',
					'hover:text-neutral-800 dark:hover:text-neutral-100'
				)}
				{...(isExternal
					? { rel: 'noopener noreferrer', target: '_blank' }
					: {})}
				href={href}
			>
				<ArrowIcon />
				<p className="ml-2 h-7">{content}</p>
			</a>
		</li>
	);
};

export default function Footer() {
	return (
		<footer className="mb-16">
			<ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
				{footerLinks.map((link, index) => (
					<FooterLink key={index} {...link} />
				))}
			</ul>
			<p className="mt-8 text-neutral-600 dark:text-neutral-300">
				© {new Date().getFullYear()}, Dan Edwards
			</p>
		</footer>
	);
}
