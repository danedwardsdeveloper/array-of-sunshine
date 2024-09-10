export const UnorderedList = ({
	children,
	...props
}: React.HTMLAttributes<HTMLUListElement>) => (
	<ul className="list-disc pl-6" {...props}>
		{children}
	</ul>
);

export const OrderedList = ({
	children,
	...props
}: React.HTMLAttributes<HTMLOListElement>) => (
	<ol className="list-decimal pl-6" {...props}>
		{children}
	</ol>
);

export const ListItem = ({
	children,
	...props
}: React.HTMLAttributes<HTMLLIElement>) => (
	<li className="mb-2" {...props}>
		{children}
	</li>
);
