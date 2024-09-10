export default function Paragraph({
	children,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p className="my-4 text-neutral-800 dark:text-neutral-200" {...props}>
			{children}
		</p>
	);
}
