import allArticles from "@/library/data";
import { formatDate } from "@/library/utilities";
import clsx from "clsx";
import Link from "next/link";

export default async function ArticlesList() {
	return (
		<div className="flex flex-col gap-y-6 md:gap-y-2">
			{allArticles.map((article) => (
				<Link
					key={article.slug}
					href={`/articles/${article.slug}`}
					className="flex flex-col p-1
						hover:bg-orange-50 active:bg-orange-50 rounded-md transition-all duration-300"
				>
					<div className="flex flex-col md:flex-row space-x-0 md:space-x-2">
						<p
							className={clsx(
								"text-neutral-600 dark:text-neutral-400 tabular-nums",
								"md:w-40 md:flex-shrink-0 md:mr-2",
							)}
						>
							{formatDate(article.publishedAt)}
						</p>
						<p
							className={clsx(
								"text-neutral-900 dark:text-neutral-100 leading-normal md:text-balance",
							)}
						>
							{article.displayTitle}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
}
