import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

import { bareDomain } from '@/library/environment'

import { apiPaths } from '@/types/definitions/apiPaths'

export function SimpleAnalyticsScript() {
  return (
    <>
      <Script async defer src={apiPaths.simpleAnalyticsScript} strategy="afterInteractive"></Script>
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

export function SimpleAnalyticsBadge() {
  return (
    <Link
      href={`https://dashboard.simpleanalytics.com/${bareDomain}?utm_source=${bareDomain}&utm_content=badge`}
      referrerPolicy="origin"
      target="_blank"
    >
      <Image
        src={apiPaths.simpleAnalyticsBadge}
        alt="Simple analytics badge"
        loading="lazy"
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        width="201"
        height="50"
        unoptimized
      />
    </Link>
  )
}
