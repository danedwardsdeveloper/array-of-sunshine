import { Metadata } from 'next';

import { article } from './data';
import { generateArticleMetadata } from '@/library/metadata';
import { ArticleLayout } from '@/components/ArticleLayout';
import Paragraph from '@/components/Paragraph';
import { Heading2, Heading3 } from '@/components/Headings';
import { AdditionalImage } from '@/components/Images';
import { UnorderedList, ListItem } from '@/components/Lists';
import BlockQuote from '@/components/BlockQuote';
import StyledLink from '@/components/StyledLink';

import SchoolOfLifeBook from '../../../../public/images/regular-webp/what-they-forgot-to-teach-you-at-school-school-of-life-book.webp';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata(article);
};

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph>
				I invested in a year of access to Codecademy's Full-Stack Pathway,
				excited to land a web development job. But after diving in and using
				the platform every day for over 6 months, I realised it wasn't the
				perfect one-size-fits-all solution I'd envisioned. Here's why I'm
				changing my approach, and why you might consider doing the same.
			</Paragraph>

			<Heading3>Love the platform, but here's the catch</Heading3>
			<Paragraph>
				Codecademy <em>is</em> fantastic. It's engaging, well-structured,
				and a great introduction to coding. Their popularity is
				well-deserved. However, every tool has its limitations.
			</Paragraph>

			<Heading3>The certificate trap and the importance of focus</Heading3>
			<Paragraph>
				The Full-Stack Pathway promises a shiny certificate at the end.
				Unfortunately, that certificate holds little weight in the job
				market - the real prize lies in developing your skills and building
				a strong portfolio. Think about it - would you rather interview
				someone with a generic certificate (that could easily be faked or
				bought) or someone whose portfolio showcases their ability to solve
				real-world problems using the technologies companies use on a daily
				basis?
			</Paragraph>

			<Heading3>
				Focus on your goals, not just completing the course
			</Heading3>
			<Paragraph>
				Inspired by this{' '}
				<StyledLink
					ariaLabel="You could finally leave school, THe School of Life"
					href="https://www.youtube.com/watch?v=pJhUs1L_RQo"
				>
					School of Life YouTube video
				</StyledLink>{' '}
				and concepts explored further in the fabulous book{' '}
				<StyledLink
					ariaLabel="School of Life book on Amazon"
					href="https://www.amazon.co.uk/What-They-Forgot-Teach-School/dp/1912891395"
				>
					What They Forgot To Teach You At School
				</StyledLink>
				, I decided to step back and think carefully about what I want to
				achieve, and how I'm going to achieve it. As alluring as the
				prospect of seeing the course progress bar reach 100% is, that won't
				be happening for me.
			</Paragraph>

			<Heading3>Why we need to finally leave school:</Heading3>
			<BlockQuote author="What they forgot to teach you at school, The School of Life">
				School curricula are not reverse engineered from the actual dilemmas
				of adult life.
			</BlockQuote>
			<UnorderedList>
				<ListItem>
					<strong>Lingering Student Mentality:</strong> Even after formal
					schooling ends, people may subconsciously crave external
					validation and approval from authority figures. They might feel a
					need to follow the rules set by others instead of pursuing their
					own path. But authority is not necessarily benign: schools and
					teachers are likely looking after their own needs more than they
					are yours.
				</ListItem>
				<ListItem>
					<strong>Questioning External Measures of Success:</strong> The
					School of Life criticises the idea that exams and grades are the
					ultimate measure of worth. They argue for finding your own
					internal sense of fulfilment rather than relying on external
					validation.
				</ListItem>
				<ListItem>
					<strong>There is no perfect curriculum:</strong> Leaving the
					metaphorical school requires embracing the uncertain and messy
					nature of life. It's about taking risks and learning from
					experience rather than seeking the false comfort of a clear-cut
					path.
				</ListItem>
				<ListItem>
					<strong>Challenging the Myth of Complete Knowledge:</strong>{' '}
					Schools (and Codecademy) subtly perpetuate the idea that
					everything worth knowing is already known, and you only have to
					study hard, reach 100% course progress, and then you'll be
					perfect. This is simply not true, especially in computer
					programming. There's always more to discover, understand, invent,
					and build. Nothing is perfect yet, and everything can always be
					improved.
				</ListItem>
			</UnorderedList>

			<AdditionalImage
				image={SchoolOfLifeBook}
				alt="What they forgot to teach you at School, School of Life book"
			/>

			<Heading3>Skip the Fluff, Prioritise what Matters</Heading3>
			<Paragraph>
				I won't be completing every aspect of the course, and I won't be
				collecting a certificate. I might get to 90%, perhaps - here's what
				I'll be missing out:
			</Paragraph>
			<UnorderedList>
				<ListItem>
					<strong>Useless Projects:</strong> Some projects simply won't
					impress potential employers. I'm focussed on building useful
					websites that demonstrate my skills and solve a real-life
					problem, relevant to the jobs I want to apply for.
				</ListItem>
				<ListItem>
					<strong>Broken Assessments:</strong> Bug-infested assessments can
					be frustrating and a waste of time.
				</ListItem>
				<ListItem>
					<strong>Outdated Course Material:</strong> Codecademy can be slow
					to keep up with fast-paced technology (like React and Redux).
					Learning from official documentation might be less user-friendly,
					but the content is more relevant.
				</ListItem>
				<ListItem>
					<strong>Streak Obsession:</strong> Codecademy is highly gamified,
					but don't get caught up in maintaining a daily streak. Taking
					breaks to focus on portfolio projects is crucial if you want to
					be employable, and ultimately, they don't have an actual prize to
					offer you.
				</ListItem>
			</UnorderedList>

			<Heading3>Learn What You Need, Not What They Teach</Heading3>
			<Paragraph>
				If you're serious about landing a coding job, delve into real job
				descriptions. Find out the specific technologies companies are
				looking for, and include them in your learning plan. Remember,
				Codecademy aims for a broad audience, not the specific needs of the
				job market in your area.
			</Paragraph>

			<Heading2>A Launchpad, Not a Destination</Heading2>
			<Paragraph>
				Codecademy is a valuable learning platform, and I've gained a lot
				from using it, but it's not a magic bullet - I won't be wasting my
				time on course content that doesn't align with my goals. Don't let
				Codecademy's business objectives disrupt your coding ambitions.
			</Paragraph>
		</ArticleLayout>
	);
}
