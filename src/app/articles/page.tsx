import { type Metadata } from 'next';

import ArticlesList from '@/components/ArticlesList';

export const metadata: Metadata = {
	title: 'Articles',
	description:
		'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
};

export default function ArticlesPage() {
	return (
		<section>
			<h1 className="font-semibold text-2xl mb-8 tracking-tighter">
				Articles
			</h1>
			<ArticlesList />
		</section>
	);
}
