'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'RSS',
    path: '/rss',
  },
]

export default function Menu() {
  const pathname = usePathname()

  return (
    <nav className="-ml-3 flex flex-row items-start md:overflow-auto md:relative mb-12">
      <div className="flex flex-row space-x-0 pr-10">
        {menuItems.map(item => (
          <Link
            key={item.path}
            href={item.path}
            className={clsx(
              'transition-all duration-200',
              'hover:text-neutral-800 dark:hover:text-neutral-200',
              'flex align-middle',
              'relative py-1 px-2 m-1',
              pathname === item.path
                ? 'font-semibold text-neutral-900 dark:text-neutral-100'
                : 'font-normal text-neutral-500 dark:text-neutral-400',
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
