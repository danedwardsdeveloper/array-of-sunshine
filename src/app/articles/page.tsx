import { type Metadata } from 'next'

import { environment } from '@/library/environment'

import ArticlesList from '@/components/ArticlesList'

export const metadata: Metadata = {
  title: 'Articles | Array of Sunshine, a coding blog by Dan Edwards.',
  description:
    'A coding blog covering full-stack web development, Node.js, TypeScript, React, Next.js, Express, MongoDB, and MERN stack applications.',
  alternates: {
    canonical: `${environment.productionBaseURL}/articles`,
  },
}

export default function ArticlesPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Articles</h1>
      <ArticlesList />
    </section>
  )
}
