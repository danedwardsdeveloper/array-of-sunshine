import clsx from 'clsx'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import Image from 'next/image'
import Script from 'next/script'

import {
  defaultMetaDescription,
  defaultMetaTitle,
  defaultSocialImage,
  siteName,
} from '@/library/articleMetadata'
import { environment } from '@/library/environment'

import Footer from '@/components/Footer'
import Menu from '@/components/Menu'

import '../library/globals.tailwind.css'
import { Providers } from '@/app/providers'

export const metadata: Metadata = {
  title: defaultMetaTitle,
  description: defaultMetaDescription,
  keywords: ['web development', 'full-stack', 'typescript', 'next.js', 'node.js', 'react', 'mern'],
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

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
        <Image
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          height={48}
          width={201}
          alt="Simple Analytics no script gif"
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
        />
      </noscript>
    </>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={clsx(
        'bg-white text-black',
        'dark:bg-black dark:text-white',
        GeistSans.variable,
        GeistMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className={clsx('antialiased', 'md:max-w-xl', 'mx-4 md:mx-auto', 'mt-8')}>
        <Providers>
          <main className={clsx('flex min-w-0 flex-auto flex-col')}>
            <Menu />
            {children}
            <Footer />
          </main>
        </Providers>
        {environment.isProduction && <SimpleAnalyticsScript />}
      </body>
    </html>
  )
}
