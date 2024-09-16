import { Metadata } from 'next';

import { article } from './data';
import { generateArticleMetadata } from '@/library/metadata';
import { ArticleLayout } from '@/components/ArticleLayout';
import { CodeBlock, InlineCode } from '@/components/Code';
import Paragraph from '@/components/Paragraph';
import { Heading2, Heading3 } from '@/components/Headings';
import { UnorderedList, ListItem } from '@/components/Lists';
import StyledLink from '@/components/StyledLink';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata(article);
};

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph>
				<StyledLink
					href="https://www.simpleanalytics.com/"
					ariaLabel="Simple Analytics, alternative to Google Analytics"
				>
					Simple Analytics
				</StyledLink>{' '}
				is an excellent alternative to Google Analytics. It doesn't collect
				creepy personalised data on your site visitors and doesn't require a
				cookie consent form. It's beautiful if you care about making a site
				that's useful and enjoyable to use.
			</Paragraph>

			<Paragraph>
				You might think this would mean the data lacks detail and utility,
				but this isn't true. You can see individual page views and the
				visitor's country and browser - perfect for a blog. It's also free
				for multiple sites, as long as you display the Simple Analytics
				badge on your site, which is a link to your dashboard.
			</Paragraph>

			<Heading2>Allow external images</Heading2>

			<Paragraph>
				To display images from an external Content Delivery Network (CDN) in
				our Next.js site, we must configure the image domains in our Next.js
				configuration. Add a remotePattern to your{' '}
				<InlineCode>next.config.mjs</InlineCode>:
			</Paragraph>

			<CodeBlock
				fileName="next.config.mjs"
				language="mjs"
			>{`/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'simpleanalyticsbadges.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
`}</CodeBlock>

			<Heading2>Create components</Heading2>

			<Paragraph>
				Next, we need to create <InlineCode>Script</InlineCode> and{' '}
				<InlineCode>Badge</InlineCode> components. I've included this code
				for clarity, but I wouldn't recommend doing it this way. I only
				create separate components in a React/Next site if I plan to reuse
				them - otherwise, it's just clutter.
			</Paragraph>

			<Heading3>SimpleAnalyticsBadge component</Heading3>

			<Paragraph>
				I've updated the badge to use the Next.js Link and Image components.
				You don't need to get any code from the Simple Analytics platform -
				just fill out the bareDomain variable with the name of your site. I
				have added
			</Paragraph>

			<UnorderedList>
				<ListItem>
					<InlineCode>alt</InlineCode> for accessibility
				</ListItem>
				<ListItem>
					<InlineCode>loading="lazy"</InlineCode> as you'll probably have
					this below the fold in the footer
				</ListItem>
				<ListItem>
					<InlineCode>height</InlineCode> and{' '}
					<InlineCode>width</InlineCode> to avoid layout shift
				</ListItem>
				<ListItem>
					<strong>
						<InlineCode>unoptimised</InlineCode>
					</strong>{' '}
					Without this, Next.js will look for the image at{' '}
					<InlineCode>
						https://my-site.com/https://https://simpleanalyticsbadges.com/my-site.com
					</InlineCode>
					.
				</ListItem>
			</UnorderedList>

			<CodeBlock
				fileName="SimpleAnalyticsBadge.tsx"
				language="tsx"
			>{`import Image from 'next/image';
import Link from 'next/link';

const bareDomain = 'my-site.com';

export default function SimpleAnalyticsBadge() {
	return (
		<Link
			href={\`https://dashboard.simpleanalytics.com/\${bareDomain}?utm_source=\${bareDomain}&utm_content=badge\`}
			referrerPolicy="origin"
			target="_blank"
		>
			<picture>
				<source
					srcSet={\`https://simpleanalyticsbadges.com/\${bareDomain}?mode=dark\`}
					media="(prefers-color-scheme: dark)"
				/>
				<Image
					src={\`https://simpleanalyticsbadges.com/\${bareDomain}?mode=light\`}
					alt="Simple analytics"
					loading="lazy"
					referrerPolicy="no-referrer"
					crossOrigin="anonymous"
					width="201"
					height="50"
					unoptimised
				/>
			</picture>
		</Link>
	);
}`}</CodeBlock>

			<Heading3>SimpleAnalyticsScript component</Heading3>

			<Paragraph>
				Now for the script. This code is straightforward and the same code
				for everyone.
			</Paragraph>

			<CodeBlock
				fileName="SimpleAnalyticsScript.tsx"
				language="tsx"
			>{`import Script from 'next/script';

export default function SimpleAnalyticsScript() {
	return (
		<>
					<Script
						async
						defer
						src="https://scripts.simpleanalyticscdn.com/latest.js"
						strategy="afterInteractive"
					></Script>
					<noscript>
						<img
							src="https://queue.simpleanalyticscdn.com/noscript.gif"
							alt="Simple Analytics no script gif"
							referrerPolicy="no-referrer-when-downgrade"
							loading="lazy"
						/>
					</noscript>
				</>
	);
}`}</CodeBlock>

			<Heading3>Calling the components</Heading3>

			<Paragraph>Add the badge to our footer (or wherever).</Paragraph>

			<CodeBlock
				fileName="Footer.tsx"
				language="tsx"
			>{`import SimpleAnalyticsBadge from '@/components/SimpleAnalyticsBadge';

export default function Footer() {
	return (
		<div>
			<p> © {new Date().getFullYear()}, MySite.com</p>
			<SimpleAnalyticsBadge />
		</div>
	);
}
`}</CodeBlock>

			<Paragraph>
				Add the script to the entry point of our site. If you're using the
				latest version of Next with the app router, it will be
				app/layout.tsx, but for older versions, it could be pages/_app.tsx.
			</Paragraph>

			<CodeBlock
				fileName="app/layout.tsx"
				language="tsx"
			>{`import SimpleAnalyticsScript from '@/components/SimpleAnalyticsScript';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
    	<body>{children}</body>
			<SimpleAnalyticsScript />
    </html>
  );
}`}</CodeBlock>

			<Heading2>Integrated version (recommended)</Heading2>

			<Paragraph>
				As I said before, I recommend creating separate components only if
				you plan to reuse them, so here's how I set up my project.
			</Paragraph>

			<Heading2>Footer.tsx</Heading2>

			<Paragraph>
				Create and call the <InlineCode>SimpleAnalyticsBadge</InlineCode>{' '}
				component as a subcomponent.
			</Paragraph>

			<CodeBlock
				fileName="Footer.tsx"
				language="tsx"
			>{`import Image from 'next/image';
import Link from 'next/link';

const footerLinks: FooterLink[] = [
				...
];

const bareDomain = 'my-site.com';

function SimpleAnalyticsBadge() {
	return (
		<Link
			href={\`https://dashboard.simpleanalytics.com/\${bareDomain}?utm_source=\${bareDomain}&utm_content=badge\`}
			referrerPolicy="origin"
			target="_blank"
		>
			<picture>
				<source
					srcSet={\`https://simpleanalyticsbadges.com/\${bareDomain}?mode=dark\`}
					media="(prefers-color-scheme: dark)"
				/>
				<Image
					src={\`https://simpleanalyticsbadges.com/\${bareDomain}?mode=light\`}
					alt="Simple analytics badge"
					loading="lazy"
					referrerPolicy="no-referrer"
					crossOrigin="anonymous"
					width="201"
					height="50"
					unoptimized
				/>
			</picture>
		</Link>
	);
}

const FooterLink = ({ href, content }: FooterLink) => {
	...
};

export default function Footer() {
	return (
		<footer className="mb-16">
			<ul>
				{footerLinks.map((link, index) => (
					<FooterLink key={index} {...link} />
				))}
			</ul>
			<div>
				<p className=" text-neutral-600 dark:text-neutral-300">
					© {new Date().getFullYear()}, Dan Edwards
				</p>
				<SimpleAnalyticsBadge />
			</div>
		</footer>
	);
}
`}</CodeBlock>

			<Paragraph>
				Create the <InlineCode>SimpleAnalyticsScript</InlineCode> component
				as a subcomponent and call it conditionally.
			</Paragraph>

			<Paragraph>
				You should disable the script from loading during development, as
				you'll get all sorts of console errors if the script is loaded from
				the wrong address. It will also mess up your page view stats.
			</Paragraph>

			<Paragraph>
				I'm using a custom environment module (based on the envalid package)
				here because I don't play around when it comes to environment
				variables, and I'm not letting anyone else handle them for me. You
				can use <InlineCode>process.env.NODE_ENV</InlineCode> instead,
				though, which should work fine.
			</Paragraph>

			<CodeBlock
				fileName="app/layout.tsx"
				language="tsx"
			>{`import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './global.tailwind.css';

import { environment } from '@/library/environment';

import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import { Providers } from '@/app/providers';

function SimpleAnalyticsScript() {
	return (
		<>
			<Script
				async
				defer
				src="https://scripts.simpleanalyticscdn.com/latest.js"
				strategy="afterInteractive"
			></Script>
			<noscript>
				<img
					src="https://queue.simpleanalyticscdn.com/noscript.gif"
					alt="Simple Analytics no script gif"
					referrerPolicy="no-referrer-when-downgrade"
					loading="lazy"
				/>
			</noscript>
		</>
	);
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body
			>
				<Providers>
					<main className={clsx('flex-auto flex flex-col min-w-0')}>
						<Menu />
						{children}
						<Footer />
					</main>
				</Providers>
				{environment.isProduction && <SimpleAnalyticsScript />}
			</body>
		</html>
	);
}
`}</CodeBlock>

			<Paragraph>And that's all there is to it. Happy analyzing!</Paragraph>
		</ArticleLayout>
	);
}
