import Image from 'next/image';
import clsx from 'clsx';

interface ImageProps {
	src: string;
	alt: string;
	classes?: string;
}

function getImageSrc(src: string, isFeatured: boolean) {
	return isFeatured
		? `/images/social-png/${src}.png`
		: `/images/regular-webp/${src}.webp`;
}

const baseImageStyles = `rounded-md w-full h-auto`;
const baseContainerStyles = 'w-full';

export const FeaturedImage = ({ src, alt, classes }: ImageProps) => {
	const imageSrc = getImageSrc(src, true);

	return (
		<div className={clsx(baseContainerStyles)}>
			<Image
				src={imageSrc}
				alt={alt}
				width={576}
				height={324}
				quality={100}
				loading="eager"
				className={clsx(baseImageStyles, classes)}
			/>
		</div>
	);
};

export const AdditionalImage = ({ src, alt, classes }: ImageProps) => {
	const imageSrc = getImageSrc(src, false);

	return (
		<div className={clsx(baseContainerStyles)}>
			<Image
				src={imageSrc}
				alt={alt}
				width={100}
				height={100}
				quality={100}
				loading="eager"
				className={clsx(baseImageStyles, classes)}
			/>
		</div>
	);
};
