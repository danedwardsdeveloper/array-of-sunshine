import clsx from 'clsx'
import Link from 'next/link'
import ArrowIcon from './ArrowIcon'

const footerLinks: FooterLinkProps[] = [
	{
		href: 'https://danedwardsdeveloper.com/',
		content: 'Portfolio',
	},
	{ href: 'https://github.com/danedwardsdeveloper', content: 'GitHub' },
	{
		href: 'https://linkedin.com/in/danedwards-developer',
		content: 'LinkedIn',
	},
]

interface FooterLinkProps {
	href: string
	content: string
}

function FooterLink({ href, content }: FooterLinkProps) {
	const isExternal = href.startsWith('http')

	return (
		<li>
			<Link
				className={clsx('flex items-center transition-all', 'hover:text-neutral-800 dark:hover:text-neutral-100')}
				{...(isExternal ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
				href={href}
			>
				<p className="mr-2 h-7">{content}</p>
				<ArrowIcon />
			</Link>
		</li>
	)
}

export default function Footer() {
	return (
		<footer className="mb-2 sm:mb-8">
			<ul className="flex flex-col sm:flex-row text-neutral-600 dark:text-neutral-300 font-sm space-y-4 sm:space-x-8 sm:space-y-0 mt-8">
				{footerLinks.map((link) => (
					<FooterLink key={link.href} {...link} />
				))}
			</ul>
			<div className="flex flex-col justify-between items-start sm:items-end sm:flex-row mt-8 mb-4">
				<p
					className="text-neutral-600 dark:text-neutral-300
 mb-2 sm:mb-0"
				>
					{/* ToDo: Make sure this runs on the client */}© {new Date().getFullYear()}, Dan Edwards
				</p>
			</div>
		</footer>
	)
}
