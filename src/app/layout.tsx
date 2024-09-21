import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import clsx from 'clsx';
import './global.tailwind.css';

import { validateEnvironment, environment } from '@/library/environment';
import {
	siteName,
	defaultMetaTitle,
	defaultMetaDescription,
	defaultSocialImage,
} from '@/library/metadata';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import { Providers } from '@/app/providers';

validateEnvironment();

export const metadata: Metadata = {
	title: defaultMetaTitle,
	description: defaultMetaDescription,
	keywords: [
		'web development',
		'full-stack',
		'typescript',
		'next.js',
		'node.js',
		'react',
		'mern',
	],
	authors: [{ name: 'Dan Edwards', url: environment.productionBaseURL }],
	creator: 'Dan Edwards',
	publisher: siteName,
	openGraph: {
		title: defaultMetaTitle,
		description: defaultMetaDescription,
		url: environment.productionBaseURL,
		siteName: siteName,
		locale: 'en_GB',
		type: 'website',
		images: [
			{
				url: defaultSocialImage.absoluteUrl,
				width: defaultSocialImage.width,
				height: defaultSocialImage.height,
				alt: defaultSocialImage.alt,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		images: defaultSocialImage.absoluteUrl,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: environment.productionBaseURL,
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

function SimpleAnalyticsScript() {
	return (
		<>
			<Script
				async
				defer
				src="https://scripts.simpleanalyticscdn.com/latest.js"
				strategy="afterInteractive"
			></Script>
			<noscript>
				<img
					src="https://queue.simpleanalyticscdn.com/noscript.gif"
					alt="Simple Analytics no script gif"
					referrerPolicy="no-referrer-when-downgrade"
					loading="lazy"
				/>
			</noscript>
		</>
	);
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en-GB"
			className={clsx(
				'text-black bg-white',
				'dark:text-white dark:bg-black',
				GeistSans.variable,
				GeistMono.variable
			)}
			suppressHydrationWarning
		>
			<body
				className={clsx(
					'antialiased',
					'md:max-w-xl',
					'mx-4 md:mx-auto',
					'mt-8'
				)}
			>
				<Providers>
					<main className={clsx('flex-auto flex flex-col min-w-0')}>
						<Menu />
						{children}
						<Footer />
					</main>
				</Providers>
				{environment.isProduction && <SimpleAnalyticsScript />}
			</body>
		</html>
	);
}
