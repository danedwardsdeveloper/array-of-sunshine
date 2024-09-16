import clsx from 'clsx';

interface CallOutProps extends React.HTMLAttributes<HTMLParagraphElement> {
	background?: 'green' | 'red';
}

const baseStyles = 'my-4 text-neutral-800 dark:text-neutral-200';
const baseBackgroundStyles = 'p-4 rounded-lg';

export default function CallOut({
	background,
	children,
	className,
	...props
}: CallOutProps) {
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
