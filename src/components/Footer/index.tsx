import clsx from 'clsx'

import { SimpleAnalyticsBadge } from '../SimpleAnalytics'
import SongAdvert from '../SongAdvert'
import FooterLink, { FooterLinkProps } from './FooterLink'

const footerLinks: FooterLinkProps[] = [
  { href: 'https://danedwardsdeveloper.com/', content: 'Portfolio' },
  { href: 'https://github.com/danedwardsdeveloper', content: 'GitHub' },
  {
    href: 'https://linkedin.com/in/danedwards-developer',
    content: 'LinkedIn',
  },
]

export default function Footer() {
  return (
    <footer className="mb-2 sm:mb-8">
      <SongAdvert />
      <ul
        className={clsx(
          'flex flex-col sm:flex-row',
          'text-neutral-600 dark:text-neutral-300 font-sm',
          ' space-y-4 sm:space-x-8 sm:space-y-0',
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
          'justify-between',
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
