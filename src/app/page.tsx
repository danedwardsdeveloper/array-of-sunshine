import ArticlesList from '@/components/ArticlesList'
import StyledLink from '@/components/StyledLink'

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold">Array of Sunshine</h1>
			<p>By Dan Edwards, a full-stack Node developer specialising in Next.js.</p>
			<p>
				{'Check out my '}
				<StyledLink href="https://danedwardsdeveloper.com/" ariaLabel={`Dan Edwards' Résumé`}>
					web development portfolio
				</StyledLink>
				.
			</p>
			<div className="my-8">
				<ArticlesList />
			</div>
		</section>
	)
}
