'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const menuItems = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Articles',
		path: '/articles',
	},
];

export default function Menu() {
	const pathname = usePathname();

	return (
		<header className="-ml-[12px] mb-16 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<nav
					className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
					id="nav"
				>
					<div className="flex flex-row space-x-0 pr-10">
						{menuItems.map((item) => (
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
										: 'font-normal text-neutral-500 dark:text-neutral-400'
								)}
							>
								{item.name}
							</Link>
						))}
					</div>
				</nav>
			</div>
		</header>
	);
}
