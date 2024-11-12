import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { ArrowIcon } from './Icons'

interface FooterLink {
  href: string
  content: string
}

const footerLinks: FooterLink[] = [
  { href: '/', content: 'Home' },
  { href: 'https://danedwardsdeveloper.com/', content: 'Portfolio' },
  { href: 'https://github.com/danedwardsdeveloper', content: 'GitHub' },
  {
    href: 'https://linkedin.com/in/danedwards-developer',
    content: 'LinkedIn',
  },
]

const bareDomain = 'arrayofsunshine.co.uk'

function SimpleAnalyticsBadge() {
  return (
    <Link
      href={`https://dashboard.simpleanalytics.com/${bareDomain}?utm_source=${bareDomain}&utm_content=badge`}
      referrerPolicy="origin"
      target="_blank"
    >
      <picture>
        <source
          srcSet={`https://simpleanalyticsbadges.com/${bareDomain}?mode=dark`}
          media="(prefers-color-scheme: dark)"
        />
        <Image
          src={`https://simpleanalyticsbadges.com/${bareDomain}?mode=light`}
          alt="Simple analytics badge"
          loading="lazy"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          width="201"
          height="50"
          unoptimized
        />
      </picture>
    </Link>
  )
}

const FooterLink = ({ href, content }: FooterLink) => {
  const isExternal = href.startsWith('http')

  return (
    <li>
      <a
        className={clsx(
          'flex items-center transition-all',
          'hover:text-neutral-800 dark:hover:text-neutral-100',
        )}
        {...(isExternal ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
        href={href}
      >
        <ArrowIcon />
        <p className="ml-2 h-7">{content}</p>
      </a>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="mb-2 sm:mb-8">
      <ul
        className={clsx(
          'flex flex-col sm:flex-row',
          'text-neutral-600 dark:text-neutral-300 font-sm',
          ' space-y-2 sm:space-x-4 sm:space-y-0',
          'mt-8 ',
        )}
      >
        {footerLinks.map((link, index) => (
          <FooterLink key={index} {...link} />
        ))}
      </ul>
      <div
        className={clsx(
          'flex flex-col',
          'justify-between w-full',
          'items-start',
          'sm:items-end sm:flex-row',
          'mt-8 mb-4',
        )}
      >
        <p className={clsx('text-neutral-600 dark:text-neutral-300', 'mb-2 sm:mb-0')}>
          © {new Date().getFullYear()}, Dan Edwards
        </p>
        <SimpleAnalyticsBadge />
      </div>
    </footer>
  )
}
