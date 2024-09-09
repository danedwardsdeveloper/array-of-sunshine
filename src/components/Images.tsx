import clsx from 'clsx';
import Image from 'next/image';

interface ImageProps {
	src: string;
	alt: string;
	classes?: string;
}

function getSrcFromFileName(src: string) {
	return `/images/${src}.webp`;
}

export function FeaturedImage({ src, alt, classes }: ImageProps) {
	return (
		<div className="w-full">
			<Image
				src={getSrcFromFileName(src)}
				alt={alt}
				width={576}
				height={324}
				layout="responsive"
				quality={100}
				loading="eager"
				className={clsx(`rounded-md`, classes)}
			/>
		</div>
	);
}

export function AdditionalImage({ src, alt, classes }: ImageProps) {
	return (
		<div className="w-full">
			<Image
				src={getSrcFromFileName(src)}
				alt={alt}
				// Max rendered width is 576px
				width={100}
				height={100}
				layout="responsive"
				quality={100}
				loading="eager"
				className={clsx(`rounded-md`, classes)}
			/>
		</div>
	);
}
