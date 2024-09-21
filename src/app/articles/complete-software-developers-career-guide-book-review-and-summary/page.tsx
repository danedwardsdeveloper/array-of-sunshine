import { Metadata } from 'next';

import { article } from './data';
import { generateArticleMetadata } from '@/library/metadata';
import { ArticleLayout } from '@/components/ArticleLayout';
import { InlineCode } from '@/components/Code';
import Paragraph from '@/components/Paragraph';
import { Heading2, Heading3 } from '@/components/Headings';
import { UnorderedList, ListItem } from '@/components/Lists';
import StyledLink from '@/components/StyledLink';

import hundredSeconds from '../../../../public/images/regular-webp/career-guide/100-seconds-of-next-js.webp';
import effectiveDevPortfolio from '../../../../public/images/regular-webp/career-guide/building-an-effective-web-development-portfolio-book.webp';
import rupaul from '../../../../public/images/regular-webp/career-guide/rupaul.webp';
import wearASuit from '../../../../public/images/regular-webp/career-guide/wear-a-suit-to-a-coding-interview.webp';
import { AdditionalImage } from '@/components/Images';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata(article);
};

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph>
				This book caught my attention because of its striking cover, and a
				quick flick through the table of contents intrigued me - especially
				the section on what to wear to programming job interviews and at the
				office.
			</Paragraph>
			<Paragraph>
				Months later - mainly because it's too big and heavy to take
				anywhere - I've finally finished The Complete Software Developer's
				Career Guide. This hefty volume covers a vast array of topics, and I
				have very mixed feelings about it. Here's my review and a summary of
				the key takeaways.
			</Paragraph>
			<Heading2>Positive impressions</Heading2>
			<Heading3>Comprehensive coverage</Heading3>
			<Paragraph>
				I enjoyed the sheer breadth of topics covered in this book. There
				really is nothing like it that I've come across.
			</Paragraph>
			<Paragraph>
				There are also topics I wouldn't have expected, and the author even
				gives content warnings where he's about to be politically incorrect
				- very surprising for a software development book! - but I thought
				it was actually quite sensitively written.
			</Paragraph>
			<Paragraph>
				The most controversial topic (considering changing your
				foreign-sounding name to avoid xenophobia in the workplace) is
				definitely something you might want to consider doing if you feel it
				is affecting your career - though John doesn't actually flat-out
				recommend this and has suffered from this problem himself.
			</Paragraph>
			<Paragraph>
				While the advice may be controversial and the chapter unusual, it
				demonstrates the author's commitment to tackling the challenges
				developers face.
			</Paragraph>
			<Heading3>Writing style</Heading3>
			<Paragraph>
				The author adopts a conversational tone throughout the book, making
				complex topics more digestible and engaging. This chatty style helps
				to break down barriers between the reader and the material, creating
				a more enjoyable reading experience.
			</Paragraph>
			<Paragraph>
				However, the writing can sometimes become repetitive, with key
				points being restated frequently. While this repetition may help
				reinforce essential concepts, some readers might find it unnecessary
				and potentially tedious.
			</Paragraph>
			<Paragraph>
				Humour is woven throughout the book, providing welcome relief from
				its often dry nature. Surprisingly, the chapter on DevOps stood out
				to me for its comedic content.
			</Paragraph>
			<Heading3>Book design</Heading3>
			<Paragraph>
				The book's design is a standout feature, beginning with its
				eye-catching cover. The combination of orange and white text on a
				black background creates a visually striking effect.
			</Paragraph>
			<Paragraph>
				Internally, the generous use of white space enhances readability and
				gives the book a premium feel. While the resulting size may be
				somewhat unwieldy, it also lends the book a sense of authority and
				comprehensiveness that many readers will appreciate.
			</Paragraph>
			<Heading3>Interesting reading list</Heading3>
			<Paragraph>
				I thoroughly enjoyed reading the reading list. I've read a few of
				the titles and wholeheartedly agree with his reviews, so I'm
				strongly inclined to check out the others. Interestingly, he also
				recommends some fiction.
			</Paragraph>
			<Heading2>Negative impressions</Heading2>
			<Heading3>It's unnecessarily huge.</Heading3>
			<Paragraph>
				The book is physically massive - 19.05 x 4.57 x 23.5 cm (7.5 x 1.75
				x 9.25 inches) and 1.361 kg (3 pounds). And while it is a long text
				(the audiobook is approximately 20 hours long, much longer than a
				typical 11 hours), I believe it could have been much smaller, with a
				more concise writing style and considerably less white space on the
				page (even though I appreciate this from a purely aesthetic point of
				view).
			</Paragraph>
			<Paragraph>
				This is a minor gripe, though, compared to my next point.
			</Paragraph>
			<Heading3>Excessive self-promotion</Heading3>
			<Paragraph>
				John is endlessly plugging his other books, courses & products. On
				practically every page, sometimes multiple times on a single page,
				there's a link to something or other that comes with an extra
				charge. At least in print, you can quickly skim past these links, as
				they're visually distinctive, but this must be highly annoying in
				the audiobook version, especially if you're trying to listen while
				driving and can't keep skipping ahead quickly.
			</Paragraph>
			<AdditionalImage image={rupaul} alt="RuPaul">
				John's self-promotion could rival RuPaul.
			</AdditionalImage>
			<Paragraph>
				He says this self-promotion is the intelligent thing to do, but I
				can't entirely agree. He might have made a ton of money from his
				books and courses (he says he's earned several million in the book),
				but this doesn't warm me to him as a person. In fact, it does quite
				the opposite. Also, if you brag about how much money you have, don't
				be surprised if people download your book illegally without feeling
				guilty.
			</Paragraph>
			<Paragraph>
				Ultimately, some self-promotion is a given, but it's better to let
				your work do the talking for you. And you really need to be
				transparent and upfront to avoid annoying your customers - there's
				no warning on the Amazon listing or his own website.
			</Paragraph>
			<Paragraph>
				Additionally, there are lots of links peppered throughout the book
				that need an explanation as to what they contain. If you saw this in
				print with no explanation, would you bother to type it out?
				<InlineCode className="block my-6">
					https://simpleprogrammer.com/cg37-frustrate
				</InlineCode>
				I did it for a few of them and quickly realised it wasn't worth the
				effort. These links would be more acceptable on a blog (although
				ideally, they'd be embedded images), but you really need to consider
				if they're worth including in a printed book.
			</Paragraph>
			<Paragraph>
				I found it frustrating to finally put away my laptop and settle down
				with a book, only to feel that I should be checking a link because
				it might be helpful or essential, but then get a tenuously relevant
				meme or photo.
			</Paragraph>
			<Paragraph>
				Ultimately, these links are disruptive and annoying and add very
				little value.
			</Paragraph>
			<Heading3>The price isn't justified.</Heading3>
			<Paragraph>
				I read an interesting article/thread recently (which I now can't
				find) by Gayle Laakmann McDowell - author of Cracking the Coding
				Interview. She was explaining why technical books are so expensive.
			</Paragraph>
			<Paragraph>
				Gayle's book is £28.25 on Amazon right now, which, although
				expensive for a paperback, is fairly cheap compared to a lot of
				technical books. I'm sure people are always moaning about the price,
				though, so I wasn't surprised to see her clap back.
			</Paragraph>
			<Paragraph>
				Her argument was that the books have a small audience, take a very
				long time to write, must be tested thoroughly, and are out of date
				within a year or two. This makes a lot of sense to me.
			</Paragraph>
			<Paragraph>
				However, none of this applies to the Career Guide. It's not
				technical, the content won't date quickly, and there's no code -
				it's not even a hardback. It's a regular non-fiction book and should
				be priced as such. Definitely not more than £20.
			</Paragraph>
			<Heading2>More things that annoyed me</Heading2>
			<Heading3>'Just get up an hour earlier.'</Heading3>
			<Paragraph>
				I find the phrase 'just get up an hour earlier' annoying - whether
				it's for career advice, learning a new skill, or getting fitter.
			</Paragraph>
			<Paragraph>
				Firstly, because it's always centred on early risers - when did you
				ever hear someone say, 'Just stay up an hour later'? Second, because
				time management doesn't work like that, something has to be
				sacrificed in order to get an extra hour out of the day, and
				sacrificing sleep isn't likely to work as intended.
			</Paragraph>
			<Paragraph>
				Sure, if you said, 'Reduce your social media use by one hour per
				day', you'd have a point. But telling people to sleep less in a book
				that also repeatedly tells you to improve your fitness seems
				misguided.
			</Paragraph>
			<Heading3>Fitness advice in a software development book</Heading3>
			<Paragraph>
				I found this odd. Sure, most of us could do with more exercise, but
				why say that in this kind of book? It's about as relevant as a
				database management book reminding us to floss our teeth and make
				sure our car tyres are inflated to the correct pressure.
			</Paragraph>
			<Heading3>Bragging about his income</Heading3>
			<Paragraph>
				Perhaps it's because I'm British, but I found this aspect incredibly
				cringe and vulgar.
			</Paragraph>
			<Paragraph>
				We love to imagine that becoming successful will make people like
				us, but very often, the opposite is true, and people will be waiting
				with contempt for you to trip and fall. Plus, they won't feel bad
				about stealing your content.
			</Paragraph>
			<Heading3>Creating a reputation</Heading3>
			<Paragraph>
				It's very annoying when good-looking people say that anyone can be
				an influencer because it's simply not true. Particularly annoying
				when the author used to be a{' '}
				<StyledLink
					href="https://www.reddit.com/r/nattyorjuice/comments/q2jyva/john_sonmez_aka_bulldog_mindset/"
					ariaLabel="John Sonmez shirtless on Reddit"
				>
					model
				</StyledLink>
				.
			</Paragraph>
			<Paragraph>
				Sure, anyone could post regular social media content, but pretty
				people are much more likely to have positive outcomes, making it
				easier to keep up the commitment.
			</Paragraph>
			<Heading2>My key takeaways</Heading2>
			<Paragraph>
				Firstly, a word of warning. I'm a full-stack web developer with
				nearly 1 year of experience, and I skipped quite a few chapters that
				weren't relevant to me, e.g. the section on management.
			</Paragraph>
			<Paragraph>
				I didn't read the chapter on game development because I'm not
				interested in developing games! Don't get me wrong, I love playing
				games (Plague Tale Requiem on PS5 being my favourite), but there's a
				big difference between playing and developing games that I'm not
				sure many people have grasped. I don't understand this field's draw
				- especially as the oversupply of applicants means that the jobs
				typically pay much less than other divisions.
			</Paragraph>
			<Heading3>Learning new technology</Heading3>
			<Paragraph>
				When learning a new technology, get a broad overview before digging
				into details. Try watching a 100 Seconds YouTube video and searching
				for common difficulties using the technology before you get started.
			</Paragraph>
			<Paragraph>
				Setting your expectations about how long something will take and how
				difficult it will be can keep you motivated and help you appreciate
				the scale of the challenge.
			</Paragraph>
			<Heading3>Dress smarter than you need to</Heading3>
			<AdditionalImage
				image={wearASuit}
				alt="Wear a suit to a coding job interview"
			>
				You don't <strong>have</strong> to wear a suit, but maybe you
				should?
			</AdditionalImage>
			<Paragraph>
				The company dress code might be casual but your clothes still say a
				lot about you, and you probably want to make a good impression.
				Coming across as a professional can't be wrong, so wear a suit to an
				interview, even if you might feel overdressed.
			</Paragraph>
			<Paragraph>
				In your day job, too, you might want to dress slightly smarter than
				you need to.
			</Paragraph>
			<Heading2>Getting a job</Heading2>
			<Heading3>Have a great CV</Heading3>
			<Paragraph>
				Your CV has to look good on the screen and when printed. And - I
				don't agree with this - but John recommends getting a professional
				CV writer to write your CV. Your CV should stand out - if it appeals
				to everyone, then it's probably boring.
			</Paragraph>
			<Paragraph>
				Having loads of languages and frameworks on your CV isn't impressive
				- it looks like you're lying or are a jack-of-all-trades. Only list
				the ones you know best.
			</Paragraph>
			<Paragraph>
				Don't use skill percentages. Ever! What does 85% JavaScript mean?
				And wouldn't you need to have mastered entirely JavaScript to know
				what percentage you were at? If you choose a high number, you look
				arrogant. And if you choose a low number, you look unskilled.
				There's no way to win.
			</Paragraph>
			<Heading3>Have a great web development portfolio.</Heading3>
			<AdditionalImage
				image={effectiveDevPortfolio}
				alt="Building an Effective Web Development Portfolio, free eBook"
				classes={'bg-[#DFEBF6] px-4 pt-8'}
			>
				This is a wonderful free eBook that I recommend to all web
				developers.
			</AdditionalImage>
			<Paragraph>
				This wasn't in the book, but I recently read another book about
				creating a great web development portfolio, and it was extremely
				good and full of surprising advice, so I'm including it here. An
				effective web development portfolio is very different from a CV! Get
				Josh W Comeau's wonderful book{' '}
				<StyledLink
					href="https://www.joshwcomeau.com/effective-portfolio/"
					ariaLabel="Building an effective dev portfolio, free eBook"
				>
					here
				</StyledLink>
				.
			</Paragraph>
			<Heading3>Negotiate Job Offers</Heading3>
			<Paragraph>
				Always negotiate your salary, but don't overlook other benefits with
				more flexibility. Discuss remote work options, a better job title,
				signing or performance bonuses, professional development budgets,
				gym memberships, and technology stipends.
			</Paragraph>
			<Paragraph>
				These perks can significantly enhance your overall compensation
				package and job satisfaction while potentially costing the company
				less than a higher base salary.
			</Paragraph>
			<Paragraph>
				Negotiate to remove 'junior' from your job title, as this will help
				you get a much better job next time.
			</Paragraph>
			<Heading3>Compare the actual value of job offers.</Heading3>
			<Paragraph>
				When evaluating multiple job offers, looking beyond the base salary
				and calculating your effective hourly wage for an accurate
				comparison is crucial.
			</Paragraph>
			<Paragraph>
				Factor in the full spectrum of compensation and costs: benefits like
				health insurance and retirement contributions, potential bonuses and
				stock options, expected working hours (including overtime), commute
				time and expenses, and any savings from work-from-home arrangements.
				Don't overlook the value of paid time off, which can significantly
				impact your work-life balance.
			</Paragraph>
			<Paragraph>
				Working hours especially can distort your idea of which job is
				better compensated.
			</Paragraph>
			<Heading3>Software development recruiters</Heading3>
			<Paragraph>
				Be careful when dealing with recruiters who might not have your best
				interests. Learn about the different types of recruiters in software
				to avoid getting burned.
			</Paragraph>
			<Heading3>Try to have multiple job offers at the same time.</Heading3>
			<Paragraph>
				Let each company know if you have alternative offers to consider.
				This can be hugely advantageous. Don't pit them against each other,
				though - the main benefit is from having options.
			</Paragraph>
			<Paragraph>
				Avoid being in a situation where you feel you simply have to accept
				a job offer because you're short on cash.
			</Paragraph>
			<Heading3>Use your existing experience.</Heading3>
			<Paragraph>
				If you have much other non-programming work experience, look for
				jobs that combine the two. Technology is used everywhere, so even if
				your previous career is very niche, there will probably be at least
				some opportunities to match. For example, I used to be a
				professional string arranger, so I could apply for jobs at sheet
				music publishing websites, companies that make notation software,
				etc., where they will appreciate my knowledge of code and music
				notation.
			</Paragraph>
			<Heading3>How maintainable is your code?</Heading3>
			<Paragraph>
				John says maintainability is his prime focus when evaluating someone
				else's code. This is because it directly impacts a software
				project's long-term success and efficiency.
			</Paragraph>
			<Heading3>How do you stay up-to-date?</Heading3>
			<Paragraph>
				Be prepared for this interview question: How do you stay up-to-date
				as a software engineer?
			</Paragraph>
			<AdditionalImage
				image={hundredSeconds}
				alt="Fireship YouTube channel is a great way to learn about new technology"
			>
				YouTube can be a great way to keep up with what's going on in tech.{' '}
				<StyledLink
					href={'https://www.youtube.com/@Fireship'}
					ariaLabel="Fireship YouTube channel"
				>
					Fireship
				</StyledLink>{' '}
				does wonderful short introduction videos.
			</AdditionalImage>
			<Paragraph>Some ideas for answers include:</Paragraph>
			<UnorderedList>
				<ListItem>Devoting time to learning new things every week</ListItem>
				<ListItem>Reading blogs</ListItem>
				<ListItem>Newsletter subscriptions</ListItem>
				<ListItem>YouTube subscriptions</ListItem>
			</UnorderedList>
			<Heading3>Learn full-stack development</Heading3>
			<Paragraph>
				Learn enough to call yourself a full-stack developer, then choose a
				speciality. Start by gaining broad knowledge across the full stack,
				from front-end to back-end technologies, databases, and DevOps.
			</Paragraph>
			<Paragraph>
				This foundational understanding lets you grasp the big picture and
				collaborate effectively across teams. Once you've achieved
				competence as a full-stack developer, focus on deepening your
				expertise in a specific area that aligns with your interests and
				market demand.
			</Paragraph>
			<Heading3>Creating a blog</Heading3>
			<Paragraph>
				A blog is a great way to advertise your skills and passion for
				programming. It's an advert that works for you 24/7. Make your blog
				very niche so you become an authority and rank highly in search
				results. Consistency is critical to growing your blog. It will
				eventually take off if you write well and add to it.
			</Paragraph>
			<Paragraph>
				John recommends using a WordPress template unless you're a web
				developer, as it's the content of the blog, not the code itself,
				that will benefit you. However, I would not recommend this approach.
			</Paragraph>
			<Paragraph>
				If you don't know how to make a website, Wix is supposedly one of
				the higher-performing sites (measured with Chrome Lighthouse), while
				Squarespace does pretty badly.
			</Paragraph>
			<Paragraph>
				If you do know web development, something like a Next.js or Gatsby
				template is a great option. This blog is a Next template customised
				to include code blocks, images, and excellent SEO.
			</Paragraph>
			<Heading3>Choose a specialty</Heading3>
			<Paragraph>
				By focusing on a particular area, such as mobile app development,
				machine learning, or cybersecurity, you can position yourself as an
				expert in a high-demand niche.
			</Paragraph>
			<Paragraph>
				This specialisation allows you to develop deep knowledge and skills
				that set you apart from generalist developers. Employers often seek
				specialists to tackle complex, domain-specific challenges, which can
				lead to better job opportunities and higher salaries.
			</Paragraph>
			<Heading2>Final thoughts</Heading2>
			<Paragraph>
				I wouldn't recommend buying this book, mainly because of the price
				and excessive self-promotion, but I think it's worth reading. You
				could get a cheap second-hand copy or look for free versions online.
				Or, just have a look at the table of contents, delve into the
				subjects that interest you, and fill in any knowledge gaps you might
				have.
			</Paragraph>
			<Paragraph>
				You could even just read the author's blog. Definitely avoid the
				audiobook, though!
			</Paragraph>
		</ArticleLayout>
	);
}
