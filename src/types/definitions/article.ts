import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { Tag } from "./tags";

export interface Article {
	hidden?: boolean;
	displayTitle: string;
	metaTitle: string;
	metaDescription: string;
	publishedAt: Date;
	updatedAt?: Date;
	slug: string;
	tags: Tag[];

	/** Landscape meta image, PNG exactly 1,200 x 675px. Stick to these dimensions even though I'm now using 1,200 x 630px on other sites.
	 */
	featuredImage: StaticImageData;
	borderOnFeaturedImage?: boolean;
	content: ReactNode;
}
