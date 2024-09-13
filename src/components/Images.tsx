import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

const baseContainerStyles = `w-full my-4`;
const baseImageStyles = `rounded-md w-full h-auto`;
const borderStyles = 'border-2 border-gray-300 rounded-md';
const sizes =
	'(max-width: 1023px) calc(100vw - 2rem), min(calc(100vw - 2rem), 576px)';

interface CustomImageProps {
	image: StaticImageData;
	alt: string;
	border?: boolean;
}

export const FeaturedImage = ({ image, alt, border }: CustomImageProps) => {
	return (
		<div className={clsx(baseContainerStyles)}>
			<Image
				src={image}
				alt={alt}
				height={576}
				width={324}
				quality={90}
				priority
				sizes={sizes}
				placeholder="blur"
				className={clsx(baseImageStyles, border && borderStyles)}
			/>
		</div>
	);
};

export const AdditionalImage = ({ image, alt, border }: CustomImageProps) => {
	return (
		<div className={clsx(baseContainerStyles, 'relative')}>
			<Image
				src={image}
				alt={alt}
				quality={80}
				sizes={sizes}
				placeholder="blur"
				className={clsx(
					baseImageStyles,
					'object-cover',
					border && borderStyles
				)}
			/>
		</div>
	);
};
