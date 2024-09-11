import { Metadata } from 'next';

import { generateArticleMetadata } from '@/library/metadata';
import { article } from './data';
import { ArticleLayout } from '@/components/ArticleLayout';
import Paragraph from '@/components/Paragraph';
import { AdditionalImage } from '@/components/Images';

import landscape from '../../../../public/images/regular-webp/landscape.webp';
import portrait from '../../../../public/images/regular-webp/portrait.webp';
import square from '../../../../public/images/regular-webp/square.webp';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata(article);
};

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph>This is a page with lots of images on it.</Paragraph>
			<AdditionalImage image={landscape} alt="Landscape image" />
			<AdditionalImage image={portrait} alt="Portrait image" />
			<AdditionalImage image={square} alt="Square image" />
		</ArticleLayout>
	);
}
