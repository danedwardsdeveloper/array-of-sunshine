import { generateArticleMetadata } from '@/library/articleMetadata'

import { ArticleLayout } from '../_components/ArticleLayout'
import { CodeBlock } from '@/app/articles/_components/Code'
import StyledLink from '@/components/StyledLink'

import Checkbox from './Checkbox'
import { article } from './data'

export const metadata = generateArticleMetadata(article)

export default function Page() {
  return (
    <ArticleLayout article={article} borderOnFeaturedImage>
      <p>{`In this article we'll be making little checkboxes like these:`}</p>

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

      <p>{`I'll assume you've already got Tailwind up and running in your React/ Next.js project.`}</p>

      <h2>1. Install the Forms plugin.</h2>

      <p>
        {`...if you haven't already. This is required because Tailwind doesn't simply apply CSS classes to the
        check boxes - it replaces them with an SVG.`}
      </p>

      <CodeBlock language="bash" fileName="Command line" disableLineNumbers>
        {`pnpm add @tailwindcss/forms

# Or
npm i @tailwindcss/forms`}
      </CodeBlock>
      <h2>2. Import the Forms plugin.</h2>

      <CodeBlock fileName="tailwind.config.ts" language="typescript">{`import forms from '@tailwindcss/forms';
import { type Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}'],
	plugins: [forms],
} satisfies Config;
`}</CodeBlock>

      <h2>3. Create a Checkbox component</h2>

      <p>
        {`This creates a functional checkbox in a nice default blue colour. I've used the `}
        <StyledLink href="https://www.npmjs.com/package/clsx" ariaLabel="clsx package, NPM">
          clsx
        </StyledLink>
        {` package, which is a lovely little utility for keeping your class names organised, especially when
        you've got conditional logic involved.`}
      </p>

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

      <h2>4. Add some colours</h2>

      <p>
        Now we can add some colours to the checkboxes, though some of these are more confusing than you might
        think.
      </p>

      <h3>Unchecked background colour</h3>
      <p>
        {`This is simply the regular background property. I'm using `}
        <code>bg-gray-100</code>
      </p>
      <p>
        {`Add a subtle hover style to indicate that it's interactive, such as `}
        <code>bg-red-200</code>
      </p>
      <h3>Checked style</h3>
      <p>
        To change the colour of the negative space around the check mark, use a text colour style, such as{' '}
        <code>text-red-500</code>
      </p>
      <p>
        {`The tick shape is actually an SVG that Tailwind injects for you, so if you want to change the colour
        it's quite complicated. I haven't bothered as they look pretty cool with white.`}
      </p>
      <h3>Focus ring</h3>
      <p>
        Finally, change the colour of the focus ring with something like <code>focus:ring-red-400</code>
      </p>
      <h2>5. Create colour options</h2>
      <p>{`Now let's create a colour map with these options to keep our code organised.`}</p>
      <CodeBlock language="typescript" fileName="Checkbox.tsx">{`const colourMap = {
	red: 'text-red-500 focus:ring-red-400 hover:bg-red-200',
	orange: 'text-orange-500 focus:ring-orange-400 hover:bg-orange-200',
	yellow: 'text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200',
	green: 'text-green-500 focus:ring-green-400 hover:bg-green-200',
	blue: 'text-blue-500 focus:ring-blue-400 hover:bg-blue-200',
	indigo: 'text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200',
	violet: 'text-violet-500 focus:ring-violet-400 hover:bg-violet-200',
};`}</CodeBlock>
      <p>
        {`Then we'll add a union type to the Checkbox props, which will allow our IDE to display the list of
        options as we're calling the component.`}
      </p>
      <CodeBlock language="typescript" fileName="Checkbox.tsx">{`interface CheckboxProps {
	colour: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	children: ReactNode;
}`}</CodeBlock>
      <h2>6. The code in full</h2>
      <p>{`That's it! Here's the component in full:`}</p>
      <CodeBlock language="typescript" fileName="Checkbox.tsx">{`'use client';
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
      <p>{`And here's how you'd call it from another page/ component:`}</p>
      <CodeBlock language="typescript" fileName="page.tsx">{`import Checkbox from './Checkbox';

export default function Page() {
	return <Checkbox colour="green">Tick me</Checkbox>;
}
`}</CodeBlock>
    </ArticleLayout>
  )
}
