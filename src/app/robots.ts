import { productionBaseURL } from '@/library/environment'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${productionBaseURL}/sitemap.xml`,
  }
}
