import allArticles from "@/library/data";
import { productionBaseURL } from "@/library/environment";

export default async function sitemap() {
	const articlePages = allArticles.map((article) => ({
		url: `${productionBaseURL}/articles/${article.slug}`,
		lastModified: article.updatedAt || article.publishedAt,
	}));

	const routes = ["", "/articles", "/rss"].map((route) => ({
		url: `${productionBaseURL}${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...articlePages];
}
