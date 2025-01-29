import clsx from 'clsx'

import ArrowIcon from '../ArrowIcon'

export interface FooterLinkProps {
  href: string
  content: string
}

export default function FooterLink({ href, content }: FooterLinkProps) {
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
        <p className="mr-2 h-7">{content}</p>
        <ArrowIcon />
      </a>
    </li>
  )
}
