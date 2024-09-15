import { Metadata } from 'next';

import { article } from './data';
import { generateArticleMetadata } from '@/library/metadata';
import { ArticleLayout } from '@/components/ArticleLayout';
import { CodeBlock, InlineCode } from '@/components/Code';
import Paragraph from '@/components/Paragraph';
import { Heading2, Heading3 } from '@/components/Headings';
import { UnorderedList, ListItem } from '@/components/Lists';
import StyledLink from '@/components/StyledLink';
import Checkbox from './Checkbox';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata(article);
};

export default function Page() {
	return (
		<ArticleLayout article={article} borderOnFeaturedImage>
			<Paragraph>
				In this article we'll be making little checkboxes like these:
			</Paragraph>

			<div className="flex flex-wrap justify-center gap-4 max-w-sm mx-auto">
				<Checkbox colour="red" checked>
					Red
				</Checkbox>
				<Checkbox colour="orange" checked>
					Orange
				</Checkbox>
				<Checkbox colour="yellow" checked>
					Yellow
				</Checkbox>
				<Checkbox colour="green" checked>
					Green
				</Checkbox>
				<Checkbox colour="blue" checked>
					Blue
				</Checkbox>
				<Checkbox colour="indigo" checked>
					Indigo
				</Checkbox>
				<Checkbox colour="violet">Violet</Checkbox>
			</div>

			<Paragraph>
				I'll assume you've already got Tailwind up and running in your
				React/ Next.js project.
			</Paragraph>

			<Heading2>1. Install the Forms plugin.</Heading2>

			<Paragraph>
				...if you haven't already. This is required because Tailwind doesn't
				simply apply CSS classes to the check boxes - it replaces them with
				an SVG.
			</Paragraph>

			<CodeBlock language="bash" fileName="Command line" disableLineNumbers>
				{`pnpm add @tailwindcss/forms

# Or
npm i @tailwindcss/forms`}
			</CodeBlock>
			<Heading2>2. Import the Forms plugin.</Heading2>

			<CodeBlock
				fileName="tailwind.config.ts"
				language="typescript"
			>{`import forms from '@tailwindcss/forms';
import { type Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}'],
	plugins: [forms],
} satisfies Config;
`}</CodeBlock>

			<Heading2>3. Create a Checkbox component</Heading2>

			<Paragraph>
				This creates a functional checkbox in a nice default blue colour.
				I've used the{' '}
				<StyledLink
					href="https://www.npmjs.com/package/clsx"
					ariaLabel="clsx package, NPM"
				>
					clsx
				</StyledLink>{' '}
				package, which is a lovely little utility for keeping your class
				names organised, especially when you've got conditional logic
				involved.
			</Paragraph>

			<CodeBlock language="typescript" fileName="Checkbox.tsx">
				{`'use client'; // You only need this line in Next.js, not React
import { ReactNode, useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Checkbox({
	checked = false,
	onChange,
	children,
}: CheckboxProps) {
	const [isChecked, setIsChecked] = useState(checked);

	useEffect(() => {
		setIsChecked(checked);
	}, [checked]);

	const handleChange = () => {
		const newChecked = !isChecked;
		setIsChecked(newChecked);
		if (onChange) {
			onChange(newChecked);
		}
	};

	return (
		<div className="flex items-center me-2">
			<input
				type="checkbox"
				id={\`checkbox-\${children}\`}
				checked={isChecked}
				onChange={handleChange}
				className={clsx(
					'w-6 h-6',
					'bg-gray-100',
					'border-gray-300',
					'rounded',
					'focus:ring-2',
					'transition duration-150 ease-in-out',
				)}
			/>
			<label className="text-sm ms-2" htmlFor={\`checkbox-\${children}\`}>
				{children}
			</label>
		</div>
	);
}`}
			</CodeBlock>

			<Heading2>4. Add some colours</Heading2>

			<Paragraph>
				Now we can add some colours to the checkboxes, though some of these
				are more confusing than you might think.
			</Paragraph>

			<Heading3>Unchecked background colour</Heading3>
			<Paragraph>
				This is simply the regular background property. I'm using{' '}
				<InlineCode>bg-gray-100</InlineCode>
			</Paragraph>
			<Paragraph>
				Add a subtle hover style to indicate that it's interactive, such as{' '}
				<InlineCode>bg-red-200</InlineCode>
			</Paragraph>
			<Heading3>Checked style</Heading3>
			<Paragraph>
				To change the colour of the negative space around the check mark,
				use a text colour style, such as{' '}
				<InlineCode>text-red-500</InlineCode>
			</Paragraph>
			<Paragraph>
				The tick shape is actually an SVG that Tailwind injects for you, so
				if you want to change the colour it's quite complicated. I haven't
				bothered as they look pretty cool with white.
			</Paragraph>
			<Heading3>Focus ring</Heading3>
			<Paragraph>
				Finally, change the colour of the focus ring with something like{' '}
				<InlineCode>focus:ring-red-400</InlineCode>
			</Paragraph>
			<Heading2>5. Create colour options</Heading2>
			<Paragraph>
				Now let's create a colour map with these options to keep our code
				organised.
			</Paragraph>
			<CodeBlock
				language="typescript"
				fileName="Checkbox.tsx"
			>{`const colourMap = {
	red: 'text-red-500 focus:ring-red-400 hover:bg-red-200',
	orange: 'text-orange-500 focus:ring-orange-400 hover:bg-orange-200',
	yellow: 'text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200',
	green: 'text-green-500 focus:ring-green-400 hover:bg-green-200',
	blue: 'text-blue-500 focus:ring-blue-400 hover:bg-blue-200',
	indigo: 'text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200',
	violet: 'text-violet-500 focus:ring-violet-400 hover:bg-violet-200',
};`}</CodeBlock>
			<Paragraph>
				Then we'll add a union type to the Checkbox props, which will allow
				our IDE to display the list of options as we're calling the
				component.
			</Paragraph>
			<CodeBlock
				language="typescript"
				fileName="Checkbox.tsx"
			>{`interface CheckboxProps {
	colour: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	children: ReactNode;
}`}</CodeBlock>
			<Heading2>6. The code in full</Heading2>
			<Paragraph>That's it! Here's the component in full:</Paragraph>
			<CodeBlock
				language="typescript"
				fileName="Checkbox.tsx"
			>{`'use client';
import { ReactNode, useState, useEffect } from 'react';
import clsx from 'clsx';

interface CheckboxProps {
	colour: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	children: ReactNode;
}

const colourMap = {
	red: 'text-red-500 focus:ring-red-400 hover:bg-red-200',
	orange: 'text-orange-500 focus:ring-orange-400 hover:bg-orange-200',
	yellow: 'text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200',
	green: 'text-green-500 focus:ring-green-400 hover:bg-green-200',
	blue: 'text-blue-500 focus:ring-blue-400 hover:bg-blue-200',
	indigo: 'text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200',
	violet: 'text-violet-500 focus:ring-violet-400 hover:bg-violet-200',
};

export default function Checkbox({
	colour,
	checked = false,
	onChange,
	children,
}: CheckboxProps) {
	const [isChecked, setIsChecked] = useState(checked);

	useEffect(() => {
		setIsChecked(checked);
	}, [checked]);

	const handleChange = () => {
		const newChecked = !isChecked;
		setIsChecked(newChecked);
		if (onChange) {
			onChange(newChecked);
		}
	};

	return (
		<div className="flex items-center me-2">
			<input
				type="checkbox"
				id={\`checkbox-\${children}\`}
				checked={isChecked}
				onChange={handleChange}
				className={clsx(
					'w-6 h-6',
					'bg-gray-100',
					'border-gray-300',
					'rounded',
					'focus:ring-2',
					'transition duration-150 ease-in-out',
					colourMap[colour]
				)}
			/>
			<label className="text-sm ms-2" htmlFor={\`checkbox-\${children}\`}>
				{children}
			</label>
		</div>
	);
}`}</CodeBlock>
			<Paragraph>
				And here's how you'd call it from another page/ component:
			</Paragraph>
			<CodeBlock
				language="typescript"
				fileName="page.tsx"
			>{`import Checkbox from './Checkbox';

export default function Page() {
	return <Checkbox colour="green">Tick me</Checkbox>;
}
`}</CodeBlock>
		</ArticleLayout>
	);
}
