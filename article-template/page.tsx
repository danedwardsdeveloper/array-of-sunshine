import { Metadata } from 'next';

import { article } from './data';
import { generateArticleMetadata } from '@/library/metadata';
import { ArticleLayout } from '@/components/ArticleLayout';
import { CodeBlock, InlineCode } from '@/components/Code';
import { ExternalLink, InternalLink } from '@/components/Links';
import Paragraph from '@/components/Paragraph';
import { Heading2, Heading3 } from '@/components/Headings';
import { AdditionalImage } from '@/components/Images';
import { OrderedList, UnorderedList, ListItem } from '@/components/Lists';
import BlockQuote from '@/components/BlockQuote';

import additionalImage from '../../../../public/images/regular-webp/featured-image.webp';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata(article);
};

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph></Paragraph>
		</ArticleLayout>
	);
}
