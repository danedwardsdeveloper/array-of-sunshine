import { article } from './data';
import { ArticleLayout } from '@/components/ArticleLayout';
import { CodeBlock, InlineCode } from '@/components/Code';
import { ExternalLink, InternalLink } from '@/components/Links';
import Paragraph from '@/components/Paragraph';
import { Heading2, Heading3, Heading4 } from '@/components/Headings';
import { AdditionalImage } from '@/components/Images';
import { OrderedList, UnorderedList, ListItem } from '@/components/Lists';
import BlockQuote from '@/components/BlockQuote';

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph></Paragraph>
		</ArticleLayout>
	);
}
