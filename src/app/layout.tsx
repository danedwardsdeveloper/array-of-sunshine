import Menu from '@/components/Menu'
import { defaultMetaDescription, defaultMetaTitle, siteName } from '@/library/constants/definitions/metadata'
import { dynamicBaseURL, productionBaseURL } from '@/library/environment'
import clsx from 'clsx'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/library/globals.tailwind.css'
import Footer from '@/components/Footer'
import socialImage from '@public/images/array-of-sunshine-social.png'
import Script from 'next/script'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

const socialImagePath = '/images/array-of-sunshine-social.png'

export const metadata: Metadata = {
	metadataBase: new URL(dynamicBaseURL),
	title: defaultMetaTitle,
	description: defaultMetaDescription,
	keywords: ['web development', 'full-stack', 'typescript', 'next.js', 'node.js', 'react'],
	creator: 'Dan Edwards',
	publisher: siteName,
	openGraph: {
		title: defaultMetaTitle,
		description: defaultMetaDescription,
		url: productionBaseURL,
		siteName: siteName,
		locale: 'en_GB',
		type: 'website',
		images: [
			{
				url: socialImagePath,
				width: socialImage.width,
				height: socialImage.height,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		images: socialImagePath,
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: dynamicBaseURL,
	},
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en-GB"
			className={clsx(
				'bg-white text-black text-lg', //
				inter.className,
			)}
			suppressHydrationWarning
		>
			<body className="antialiased leading-7 flex flex-col md:max-w-xl md:mx-auto mt-4 md:mt-8 mx-4">
				<Menu />
				<main>{children}</main>
				<Footer />
				<Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
			</body>
		</html>
	)
}
