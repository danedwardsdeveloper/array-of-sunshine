import { CodeBlock } from "@/components/Code";
import { april, tags } from "@/library/constants";
import { createDate } from "@/library/utilities";
import type { Article } from "@/types";
import featuredImage from "@public/images/whats-the-type-for-a-transaction-in-drizzle.png";

export const whatsTheTypeDrizzleTransaction: Article = {
	displayTitle: "What’s the type for a Transaction in Drizzle?",
	metaTitle: "What’s the type for a Transaction in Drizzle Database ORM?",
	metaDescription:
		"Learn how to properly type Drizzle ORM transactions in TypeScript. This quick guide shows you how to extract transaction types or interfaces.",
	tags: [tags.drizzle, tags.databases],
	featuredImage,
	publishedAt: createDate(26, april, 2025),
	slug: "whats-the-type-for-a-transaction-in-drizzle",
	content: (
		<>
			<p>
				Drizzle doesn’t provide a type for transactions, so you need to extract
				it yourself.
			</p>
			<CodeBlock
				fileName="types/definitions/database.ts"
				language="typescript"
			>{`import type { drizzle } from 'drizzle-orm/node-postgres'

export type DrizzleClient = ReturnType<typeof drizzle>
export type Transaction = Parameters<Parameters<DrizzleClient['transaction']>[0]>[0]`}</CodeBlock>
		</>
	),
};
