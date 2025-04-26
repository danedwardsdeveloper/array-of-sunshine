import allArticles from "@/library/data";
import { productionBaseURL } from "@/library/environment";

function escapeXml(unsafe: string): string {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

export async function GET() {
	const itemsXml = allArticles
		.sort((a, b) => {
			if (
				new Date(a.updatedAt || a.publishedAt) >
				new Date(b.updatedAt || b.publishedAt)
			) {
				return -1;
			}
			return 1;
		})
		.map(
			(post) =>
				`<item>
          <title>${escapeXml(post.displayTitle)}</title>
          <link>${escapeXml(`${productionBaseURL}/articles/${post.slug}`)}</link>
          <description>${escapeXml(post.metaDescription || "")}</description>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        </item>`,
		)
		.join("\n");

	const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${escapeXml("Array of Sunshine")}</title>
        <link>${escapeXml(productionBaseURL)}</link>
        <description>${escapeXml("Array of Sunshine web dev blog RSS feed")}</description>
        ${itemsXml}
    </channel>
  </rss>`;

	return new Response(rssFeed, {
		headers: {
			"Content-Type": "application/xml;charset=utf-8",
		},
	});
}
