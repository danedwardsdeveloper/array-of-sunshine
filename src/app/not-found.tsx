import ArticlesList from "@/components/ArticlesList";

export default function NotFound() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold">Page not found</h1>
			<p className="mb-8 text-balance">
				Sorry, I have probably updated the URL or deleted whatever you were
				looking for.
			</p>
			<h2 className="mb-8 text-lg font-semibold">
				Were you looking for one of these?
			</h2>
			<ArticlesList />
		</section>
	);
}
