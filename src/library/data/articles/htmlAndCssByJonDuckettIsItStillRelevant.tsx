import StyledLink from '@/components/StyledLink'
import { may, tags } from '@/library/constants'
import { createDate } from '@/library/utilities'
import type { Article } from '@/types'
import featuredImage from '@public/images/html-and-css-by-john-duckett-is-it-still-relevant.png'

export const htmlAndCssByJonDuckettIsItStillRelevant: Article = {
	displayTitle: 'HTML & CSS by Jon Duckett: is it still relevant?',
	metaTitle: 'HTML & CSS by Jon Duckett: is this coding book still relevant?',
	publishedAt: createDate(8, may, 2024),
	tags: [tags.bookReview, tags.html, tags.css],
	metaDescription: "Discover if Jon Duckett's 'HTML & CSS' is still relevant in today's fast-evolving web development landscape.",
	featuredImage,
	slug: 'html-and-css-by-john-duckett-is-it-still-relevant',
	content: (
		<>
			<p>
				{`I bought this book as it was recommended reading to accompany the Codecademy Full-Stack Engineer
        career pathway. I usually reach for a book very fast whenever I'm learning something new, but I must
        admit I was suspicious about such an old book on such a fast-changing subject.`}
			</p>

			<p>
				However, I was pleasantly surprised by how relevant it all seemed, and it helped me to organise and solidify my existing
				understanding of these languages. The first working draft of HTML 5 was published in January 2008, and the book was published in
				2011.
			</p>

			<p>
				{`While there have been many additions, little is depreciated or outdated. CSS, however, has come a long
        way since the book's release, but the information is so nicely organised and well-written that I
        recommend reading it if you are learning web development.`}
			</p>

			<h2>The good stuff</h2>

			<h3>Excellent overview of two languages</h3>
			<p>
				{`The book offers a well-thought-out and nicely presented overview of what these two technologies can
        do. It's helpful to see the bigger picture early when learning something new.`}
			</p>

			<h3>Beautiful layouts</h3>
			<p>
				{`I don't know what it is about software development books, but nearly all the ones I have are huge and
        heavy but sparsely typeset. Despite being over 500 pages long, it's a pretty quick read. The attention
        to layout and presentation makes a welcome change from official programming documentation with little
        imagination given to these areas.`}
			</p>

			<h3>Fantastic explanations</h3>
			<p>
				{`Duckett clearly knows a thing or two about pedagogy because he takes nothing for granted and explains
        everything clearly. Too often, once we've mastered a complex subject, we lose all memory of the effort
        we put in to get where we are today. Good teaching is about having empathy with your students and
        imagining that you don't know the things you know now.`}
			</p>

			<h2>{`What's out of date`}</h2>

			<h3>HTML5 semantic elements</h3>
			<p>
				These <em>are</em>
				{` in the book but in a section at the back (page 432). While a new practice when the
        book was first published, it's now well-established and essential for keeping your code structured,
        clean and accessible. A modern web page should use tags like these as standard, not as an extra: `}
				<code>{'<header>'}</code>, <code>{'<nav>'}</code>, <code>{'<main>'}</code>, <code>{'<article>'}</code>, <code>{'<section>'}</code>,{' '}
				<code>{'<aside>'}</code> and <code>{'<footer>'}</code>.
			</p>

			<h3>Flash player</h3>
			<p>
				Adobe Flash Player was a platform that enabled websites to play videos, which peaked in popularity around 2005 and 2010, but it is
				now{' '}
				<StyledLink href="https://www.lifewire.com/what-happened-to-flash-2617986" ariaLabel="What happened to Flash, Lifewire article">
					officially dead
				</StyledLink>
				.
			</p>

			<p>
				It has been superseded by the HTML <code>{'<video>'}</code> element and other video-hosting platforms, such as YouTube & Vimeo, that
				allow you to embed videos on a web page easily without hosting huge files and worrying about encoding.
			</p>

			<h3>Image formats</h3>
			<p>
				JPEG and PNG images are now being replaced on the web with WebP and AVIF. These file types offer better compression, which enables
				you to reduce the file size dramatically without losing too much quality. This, in turn, will make your sites load faster. WebP was
				developed by Google and currently has better browser support than AVIF.
			</p>

			<h3>CSS blink</h3>
			<p>
				Sadly, this incredibly annoying feature has depreciated.{' '}
				<StyledLink ariaLabel="Homer Simpson's website, YouTube" href="https://www.youtube.com/watch?v=HlX4T2SBkC0">
					{`Homer Simpson's website`}
				</StyledLink>
				{' could have used it to great effect.'}
			</p>

			<h3>960.gs</h3>
			<p>
				This CSS framework, referenced frequently throughout the book, allowed developers to use a grid layout system easily before CSS3 was
				widely supported. It was trendy in the early 2010s before features like Grid and Flexbox were introduced.
			</p>

			<h2>{`What's missing`}</h2>

			<h3>CSS Grid & Flexbox</h3>
			<p>
				These powerful features only emerged when the book was published, negating the need for many hacky workarounds, such as using{' '}
				<code>float</code> for layout and <code>inline-block</code> for horizontal alignment.
			</p>

			<h3>Responsive Design Enhancements</h3>

			<h3>Media Queries</h3>
			<p>
				The introduction of more sophisticated media queries, with features like orientation and resolution detection, gives us even more
				fine-grained control over building responsive designs across various devices.
			</p>

			<h3>
				Viewport Units (<code>vh</code>, <code>vw</code>, <code>vmin</code>, <code>vmax</code>):
			</h3>
			<p>
				Relative to the viewport size, these units simplified the creation of responsive layouts that scale proportionally with screen
				dimensions.
			</p>

			<h3>Variables (Custom Properties)</h3>
			<p>
				<strong>CSS Variables:</strong> Native variables in CSS allow you to define reusable values, making your stylesheets more dynamic
				and maintainable. This reduces repetition and eases style updates.
			</p>

			<ul>
				<li>
					<strong>Animations and Transitions</strong>
					<ul>
						<li>
							<strong>CSS Transitions:</strong> Smoothly transition property changes over a set duration, creating simple animations on
							hover or other interactions without JavaScript.
						</li>
						<li>
							<strong>CSS Animations:</strong> More powerful control over animations with <code>@keyframes</code>, allowing you to define
							complex, multi-step animation sequences directly within your stylesheets.
						</li>
					</ul>
				</li>
				<li>
					<strong>Other notable CSS updates</strong>
					<ul>
						<li>
							<strong>Calc Function:</strong> Allows calculations within CSS (e.g., <code>width: calc(100% - 20px);</code> for dynamic
							sizing).
						</li>
						<li>
							<strong>Shapes:</strong> Features for creating basic geometric shapes (<code>circle</code>, <code>polygon</code>) with CSS.
						</li>
						<li>
							<strong>Filters and Blend Modes:</strong> Graphical effects like <code>blur</code>, <code>grayscale</code>,{' '}
							<code>drop-shadow</code>, and blend modes manipulate image and element appearance.
						</li>
					</ul>
				</li>
			</ul>

			<p>
				{`Overall, this is well worth reading but not much use as a reference
				book. And don't bother buying a brand new copy - I bought mine on
				Amazon for £19.99, but there are copies in excellent condition on
				eBay for less than £3. It's also online as a `}
				<StyledLink href="https://wtf.tw/ref/duckett.pdf" ariaLabel="HTML and CSS by John Duckett, free PDF">
					PDF
				</StyledLink>
				.
			</p>

			<p>
				I have since come across a much better book:{' '}
				<StyledLink
					href="https://www.amazon.co.uk/HTML-CSS-JavaScript-easy-steps/dp/184078878X"
					ariaLabel="HTML, CSS & JavaScript
				in Easy Steps by Mike McGrath, Amazon"
				>
					HTML, CSS & JavaScript in Easy Steps
				</StyledLink>{' '}
				by Mike McGrath. Updated in 2020, this is a similar (weirdly almost identical in size and weight to the Duckett book) but much more
				up-to-date whistle-stop tour of the languages of web development.
			</p>
		</>
	),
}
