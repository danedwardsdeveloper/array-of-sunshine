import { Metadata } from 'next';
import { article } from './data';
import { generateArticleMetadata } from '@/library/metadata';
import { ArticleLayout } from '@/components/ArticleLayout';
import { CodeBlock, InlineCode } from '@/components/Code';
import Paragraph from '@/components/Paragraph';
import { Heading2, Heading3 } from '@/components/Headings';
import { AdditionalImage } from '@/components/Images';
import { OrderedList, UnorderedList, ListItem } from '@/components/Lists';
import BlockQuote from '@/components/BlockQuote';
import StyledLink from '@/components/StyledLink';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata(article);
};

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph>
				I bought this book as it was recommended reading to accompany the
				Codecademy Full-Stack Engineer career pathway. I usually reach for a
				book very fast whenever I'm learning something new, but I must admit
				I was suspicious about such an old book on such a fast-changing
				subject.
			</Paragraph>

			<Paragraph>
				However, I was pleasantly surprised by how relevant it all seemed,
				and it helped me to organise and solidify my existing understanding
				of these languages. The first working draft of HTML 5 was published
				in January 2008, and the book was published in 2011.
			</Paragraph>

			<Paragraph>
				While there have been many additions, little is depreciated or
				outdated. CSS, however, has come a long way since the book's
				release, but the information is so nicely organised and well-written
				that I recommend reading it if you are learning web development.
			</Paragraph>

			<Heading2>The good stuff</Heading2>

			<Heading3>Excellent overview of two languages</Heading3>
			<Paragraph>
				The book offers a well-thought-out and nicely presented overview of
				what these two technologies can do. It's helpful to see the bigger
				picture early when learning something new.
			</Paragraph>

			<Heading3>Beautiful layouts</Heading3>
			<Paragraph>
				I don't know what it is about software development books, but nearly
				all the ones I have are huge and heavy but sparsely typeset. Despite
				being over 500 pages long, it's a pretty quick read. The attention
				to layout and presentation makes a welcome change from official
				programming documentation with little imagination given to these
				areas.
			</Paragraph>

			<Heading3>Fantastic explanations</Heading3>
			<Paragraph>
				Duckett clearly knows a thing or two about pedagogy because he takes
				nothing for granted and explains everything clearly. Too often, once
				we've mastered a complex subject, we lose all memory of the effort
				we put in to get where we are today. Good teaching is about having
				empathy with your students and imagining that you don't know the
				things you know now.
			</Paragraph>

			<Heading2>What's out of date</Heading2>

			<Heading3>HTML5 semantic elements</Heading3>
			<Paragraph>
				These <em>are</em> in the book but in a section at the back (page
				432). While a new practice when the book was first published, it's
				now well-established and essential for keeping your code structured,
				clean and accessible. A modern web page should use tags like these
				as standard, not as an extra: <InlineCode>{'<header>'}</InlineCode>,{' '}
				<InlineCode>{'<nav>'}</InlineCode>,{' '}
				<InlineCode>{'<main>'}</InlineCode>,{' '}
				<InlineCode>{'<article>'}</InlineCode>,{' '}
				<InlineCode>{'<section>'}</InlineCode>,{' '}
				<InlineCode>{'<aside>'}</InlineCode> and{' '}
				<InlineCode>{'<footer>'}</InlineCode>.
			</Paragraph>

			<Heading3>Flash player</Heading3>
			<Paragraph>
				Adobe Flash Player was a platform that enabled websites to play
				videos, which peaked in popularity around 2005 and 2010, but it is
				now{' '}
				<StyledLink
					href="https://www.lifewire.com/what-happened-to-flash-2617986"
					ariaLabel="What happened to Flash, Lifewire article"
				>
					officially dead
				</StyledLink>
				.
			</Paragraph>

			<Paragraph>
				It has been superseded by the HTML{' '}
				<InlineCode>{'<video>'}</InlineCode> element and other video-hosting
				platforms, such as YouTube & Vimeo, that allow you to embed videos
				on a web page easily without hosting huge files and worrying about
				encoding.
			</Paragraph>

			<Heading3>Image formats</Heading3>
			<Paragraph>
				JPEG and PNG images are now being replaced on the web with WebP and
				AVIF. These file types offer better compression, which enables you
				to reduce the file size dramatically without losing too much
				quality. This, in turn, will make your sites load faster. WebP was
				developed by Google and currently has better browser support than
				AVIF.
			</Paragraph>

			<Heading3>CSS blink</Heading3>
			<Paragraph>
				Sadly, this incredibly annoying feature has depreciated.{' '}
				<StyledLink
					ariaLabel="Homer Simpson's website, YouTube"
					href="https://www.youtube.com/watch?v=HlX4T2SBkC0"
				>
					Homer Simpson's website
				</StyledLink>{' '}
				could have used it to great effect.
			</Paragraph>

			<Heading3>960.gs</Heading3>
			<Paragraph>
				This CSS framework, referenced frequently throughout the book,
				allowed developers to use a grid layout system easily before CSS3
				was widely supported. It was trendy in the early 2010s before
				features like Grid and Flexbox were introduced.
			</Paragraph>

			<Heading2>What's missing</Heading2>

			<Heading3>CSS Grid & Flexbox</Heading3>
			<Paragraph>
				These powerful features only emerged when the book was published,
				negating the need for many hacky workarounds, such as using{' '}
				<InlineCode>float</InlineCode> for layout and{' '}
				<InlineCode>inline-block</InlineCode> for horizontal alignment.
			</Paragraph>

			<Heading3>Responsive Design Enhancements</Heading3>

			<Heading3>Media Queries</Heading3>
			<Paragraph>
				The introduction of more sophisticated media queries, with features
				like orientation and resolution detection, gives us even more
				fine-grained control over building responsive designs across various
				devices.
			</Paragraph>

			<Heading3>
				Viewport Units (<InlineCode>vh</InlineCode>,{' '}
				<InlineCode>vw</InlineCode>, <InlineCode>vmin</InlineCode>,{' '}
				<InlineCode>vmax</InlineCode>):
			</Heading3>
			<Paragraph>
				Relative to the viewport size, these units simplified the creation
				of responsive layouts that scale proportionally with screen
				dimensions.
			</Paragraph>

			<Heading3>Variables (Custom Properties)</Heading3>
			<Paragraph>
				<strong>CSS Variables:</strong> Native variables in CSS allow you to
				define reusable values, making your stylesheets more dynamic and
				maintainable. This reduces repetition and eases style updates.
			</Paragraph>

			<UnorderedList>
				<ListItem>
					<strong>Animations and Transitions</strong>
					<UnorderedList>
						<ListItem>
							<strong>CSS Transitions:</strong> Smoothly transition
							property changes over a set duration, creating simple
							animations on hover or other interactions without
							JavaScript.
						</ListItem>
						<ListItem>
							<strong>CSS Animations:</strong> More powerful control over
							animations with <InlineCode>@keyframes</InlineCode>,
							allowing you to define complex, multi-step animation
							sequences directly within your stylesheets.
						</ListItem>
					</UnorderedList>
				</ListItem>
				<ListItem>
					<strong>Other notable CSS updates</strong>
					<UnorderedList>
						<ListItem>
							<strong>Calc Function:</strong> Allows calculations within
							CSS (e.g.,{' '}
							<InlineCode>width: calc(100% - 20px);</InlineCode> for
							dynamic sizing).
						</ListItem>
						<ListItem>
							<strong>Shapes:</strong> Features for creating basic
							geometric shapes (<InlineCode>circle</InlineCode>,{' '}
							<InlineCode>polygon</InlineCode>) with CSS.
						</ListItem>
						<ListItem>
							<strong>Filters and Blend Modes:</strong> Graphical effects
							like <InlineCode>blur</InlineCode>,{' '}
							<InlineCode>grayscale</InlineCode>,{' '}
							<InlineCode>drop-shadow</InlineCode>, and blend modes
							manipulate image and element appearance.
						</ListItem>
					</UnorderedList>
				</ListItem>
			</UnorderedList>

			<Paragraph>
				Overall, this is well worth reading but not much use as a reference
				book. And don't bother buying a brand new copy - I bought mine on
				Amazon for £19.99, but there are copies in excellent condition on
				eBay for less than £3. It's also online as a{' '}
				<StyledLink
					href="https://wtf.tw/ref/duckett.pdf"
					ariaLabel="HTML and CSS by John Duckett, free PDF"
				>
					PDF
				</StyledLink>
				.
			</Paragraph>

			<Paragraph>
				I have since come across a much better book:{' '}
				<StyledLink
					href="https://www.amazon.co.uk/HTML-CSS-JavaScript-easy-steps/dp/184078878X"
					ariaLabel="HTML, CSS & JavaScript
				in Easy Steps by Mike McGrath, Amazon"
				>
					HTML, CSS & JavaScript in Easy Steps
				</StyledLink>{' '}
				by Mike McGrath. Updated in 2020, this is a similar (weirdly almost
				identical in size and weight to the Duckett book) but much more
				up-to-date whistle-stop tour of the languages of web development.
			</Paragraph>
		</ArticleLayout>
	);
}
