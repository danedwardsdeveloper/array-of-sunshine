import clsx from 'clsx';

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
	background?: 'green' | 'red';
}

const baseStyles = 'my-4 text-neutral-800 dark:text-neutral-200';
const baseBackgroundStyles = 'p-4 rounded-lg';

export default function Paragraph({
	background,
	children,
	className,
	...props
}: ParagraphProps) {
	return (
		<p
			className={clsx(
				baseStyles,
				{
					[`${baseBackgroundStyles} bg-green-200`]: background === 'green',
					[`${baseBackgroundStyles} bg-red-300`]: background === 'red',
				},
				className
			)}
			{...props}
		>
			{children}
		</p>
	);
}
