import { ExternalLink, InternalLink } from '@/components/Links';
import ArticlesList from '@/components/ArticlesList';

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				Array of Sunshine
			</h1>
			<p className="mb-4">
				Welcome to Array of Sunshine, your radiant source for full-stack web
				development insights! I'm Dan Edwards, a passionate developer on a
				mission to brighten up the cloudy world of coding and illuminate a
				path through the ever-evolving landscape of modern web technologies.
				I'm a Node.js developer, I write everything in TypeScript, and I'm
				obsessed with Next.js. Check out my{' '}
				<ExternalLink
					href="https://danedwardsdeveloper.com/"
					ariaLabel={`Dan Edwards' Resume`}
				>
					resume
				</ExternalLink>
				.
			</p>
			<div className="my-8">
				<ArticlesList />
			</div>
		</section>
	);
}
