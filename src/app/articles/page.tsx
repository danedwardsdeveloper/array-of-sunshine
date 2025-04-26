import ArticlesList from '@/components/ArticlesList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Articles | Array of Sunshine, a coding blog by Dan Edwards.',
	alternates: {
		canonical: '/articles',
	},
}

export default function ArticlesPage() {
	return (
		<section>
			<h1 className="font-semibold text-2xl mb-8">Articles</h1>
			<ArticlesList />
		</section>
	)
}
