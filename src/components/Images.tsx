import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

const baseContainerStyles = `w-full my-4`;
const baseImageStyles = `rounded-lg w-full h-auto`;
const borderStyles = 'border-2 border-gray-300 rounded-lg';
const captionStyles = 'mt-2 mb-6 text-gray-600 italic text-sm';

interface CustomImageProps {
	image: StaticImageData;
	alt: string;
	caption?: string;
	children?: ReactNode;
	border?: boolean;
	classes?: string;
}

export const FeaturedImage = ({ image, alt, border }: CustomImageProps) => {
	return (
		<div className={clsx(baseContainerStyles)}>
			<Image
				src={image}
				alt={alt}
				priority
				placeholder="blur"
				className={clsx(baseImageStyles, border && borderStyles)}
			/>
		</div>
	);
};

export const AdditionalImage = ({
	image,
	alt,
	caption,
	children,
	classes,
	border,
}: CustomImageProps) => {
	return (
		<>
			<div className={clsx(baseContainerStyles, 'relative')}>
				<Image
					src={image}
					alt={alt}
					placeholder="blur"
					className={clsx(
						baseImageStyles,
						'object-cover',
						classes,
						border && borderStyles
					)}
				/>
			</div>
			{children ? (
				<div className={clsx(captionStyles)}>{children}</div>
			) : caption ? (
				<p className={clsx(captionStyles)}>{caption}</p>
			) : null}
		</>
	);
};
