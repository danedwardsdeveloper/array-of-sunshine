export const Heading2 = ({
	children,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
	<h2 className="text-xl font-medium tracking-tight mt-6 mb-2" {...props}>
		{children}
	</h2>
);

export const Heading3 = ({
	children,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
	<h3 className="text-lg font-medium tracking-tight mt-6 mb-2" {...props}>
		{children}
	</h3>
);
