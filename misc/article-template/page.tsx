// @ts-nocheck
import { Metadata } from 'next';

import { article } from './data';
import { generateArticleMetadata } from '@/library/articleMetadata';
import { ArticleLayout } from '@/components/ArticleLayout';
import { CodeBlock, InlineCode } from '@/components/Code';
import Paragraph from '@/components/Paragraph';
import { Heading2, Heading3 } from '@/components/Headings';
import { AdditionalImage } from '@/components/Images';
import { OrderedList, UnorderedList, ListItem } from '@/components/Lists';
import BlockQuote from '@/components/BlockQuote';
import StyledLink from '@/components/StyledLink';

import additionalImage from '../../../../public/images/regular-webp/featured-image.webp';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata({
		...article,
		slug: 'article-slug',
	});
};

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph></Paragraph>
		</ArticleLayout>
	);
}
