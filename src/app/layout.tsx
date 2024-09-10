import './global.tailwind.css';
import Script from 'next/script';
import type { Metadata, Viewport } from 'next';

import {
	validateEnvironment,
	environment,
	baseUrl,
} from '@/library/environment';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from '@/components/Menu';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '@/components/Footer';
import { Providers } from '@/app/providers';

import clsx from 'clsx';

validateEnvironment();

const title = `Array of Sunshine | Full-Stack Web Dev Insights by Dan Edwards`;

const description = `Explore Array of Sunshine, a coding blog by Dan Edwards covering full-stack web development. Dive into Node.js, TypeScript, React, Next.js, Express, MongoDB, and MERN stack applications. Level up your web dev skills today!`;

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: title,
		template: '%s | Array of Sunshine, Full-Stack Web Dev Blog',
	},
	description: description,
	openGraph: {
		title: 'My Portfolio',
		description: description,
		url: baseUrl,
		siteName: 'My Portfolio',
		locale: 'en_US',
		type: 'website',
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
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

function SimpleAnalyticScript() {
	return <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />;
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
				'text-black bg-white dark:text-white dark:bg-black',
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<body
				className={clsx(
					'antialiased',
					'max-w-xl',
					'mx-4 lg:mx-auto',
					'mt-8'
				)}
			>
				<Providers>
					<main
						className={clsx(
							'flex-auto flex flex-col min-w-0',
							' mt-6',
							'md:px-0'
						)}
					>
						<Navbar />
						{children}
						<Footer />
						<Analytics />
						<SpeedInsights />
					</main>
				</Providers>
				{environment.isProduction && <SimpleAnalyticScript />}
			</body>
		</html>
	);
}
