import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";

import {
	defaultMetaDescription,
	defaultMetaTitle,
	defaultSocialImage,
	siteName,
} from "@/library/articleMetadata";
import { productionBaseURL } from "@/library/environment";

import Menu from "@/components/Menu";

import "../library/globals.tailwind.css";
import Script from "next/script";

const Footer = dynamic(() => import("@/components/Footer"), {
	loading: () => (
		<div className="w-full h-[483px] bg-gray-100 dark:bg-gray-800 mt-8 animate-pulse" />
	),
});

export const metadata: Metadata = {
	title: defaultMetaTitle,
	description: defaultMetaDescription,
	keywords: [
		"web development",
		"full-stack",
		"typescript",
		"next.js",
		"node.js",
		"react",
		"mern",
	],
	authors: [{ name: "Dan Edwards", url: productionBaseURL }],
	creator: "Dan Edwards",
	publisher: siteName,
	openGraph: {
		title: defaultMetaTitle,
		description: defaultMetaDescription,
		url: productionBaseURL,
		siteName: siteName,
		locale: "en_GB",
		type: "website",
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
		card: "summary_large_image",
		images: defaultSocialImage.absoluteUrl,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: productionBaseURL,
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html
			lang="en-GB"
			className={clsx(
				"bg-white text-black",
				"dark:bg-black dark:text-white",
				GeistSans.variable,
				GeistMono.variable,
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
	);
}
