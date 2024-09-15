interface BlockQuoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
	author: string;
}

export default function BlockQuote({
	children,
	author,
	...props
}: BlockQuoteProps) {
	return (
		<div className="my-4 px-6 py-4 bg-gray-100 rounded-lg">
			<div className="flex flex-col">
				<span className="text-5xl text-gray-400 leading-none self-start mb-2">
					❝
				</span>
				<blockquote className="italic text-lg px-4" {...props}>
					{children}
				</blockquote>
				<span className="text-5xl text-gray-400 leading-none self-end mt-2">
					❞
				</span>
			</div>
			<p className="mt-4 text-right text-gray-600 pr-4">{`- ${author}`}</p>
		</div>
	);
}
