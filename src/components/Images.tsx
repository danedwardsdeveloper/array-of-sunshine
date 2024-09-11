'use client';
import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

function getImageSrc(src: string, isFeatured: boolean): string {
	return isFeatured
		? `/images/social-png/${src}.png`
		: `/images/regular-webp/${src}.webp`;
}

const baseImageStyles = `rounded-md w-full h-auto`;
const borderStyles = 'border-2 border-gray-300 rounded-md';
const placeholderStyles = 'absolute inset-0 bg-gray-200 animate-pulse';

interface FeaturedImageProps {
	src: string;
	alt: string;
	border?: boolean;
}

interface AdditionalImageProps extends FeaturedImageProps {
	width: number;
	height: number;
}

export const FeaturedImage = ({ src, alt, border }: FeaturedImageProps) => {
	const [isLoading, setIsLoading] = useState(true);
	const imageSrc = getImageSrc(src, true);

	return (
		<div className={clsx('w-full')}>
			{isLoading && (
				<div
					className={clsx(placeholderStyles)}
					style={{ width: 324, height: 576 }}
				/>
			)}
			<Image
				src={imageSrc}
				alt={alt}
				width={576}
				height={324}
				quality={100}
				priority
				sizes="(max-width: 768px) 100vw, 576px"
				className={clsx(baseImageStyles, border && borderStyles)}
				onLoadingComplete={() => setIsLoading(false)}
			/>
		</div>
	);
};

export const AdditionalImage = ({
	src,
	alt,
	height,
	width,
	border,
}: AdditionalImageProps) => {
	const [isLoading, setIsLoading] = useState(true);
	const imageSrc = getImageSrc(src, false);

	return (
		<div className={clsx('w-full relative')}>
			{isLoading && (
				<div
					className={clsx(placeholderStyles)}
					style={{ width, height }}
				/>
			)}
			<Image
				src={imageSrc}
				alt={alt}
				height={height}
				width={width}
				quality={100}
				sizes="(max-width: 768px) 100vw, 50vw"
				className={clsx(
					baseImageStyles,
					'object-cover',
					border && borderStyles
				)}
				onLoadingComplete={() => setIsLoading(false)}
			/>
		</div>
	);
};
