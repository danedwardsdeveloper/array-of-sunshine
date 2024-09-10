export default function BlockQuote({
	children,
	...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
	return (
		<blockquote
			className="border-l-4 border-gray-300 pl-4 italic my-4"
			{...props}
		>
			{children}
		</blockquote>
	);
}
