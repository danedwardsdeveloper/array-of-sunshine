import { Metadata } from 'next';

import { generateArticleMetadata } from '@/library/metadata';
import { article } from './data';
import { ArticleLayout } from '@/components/ArticleLayout';
import StyledLink from '@/components/StyledLink';
import Paragraph from '@/components/Paragraph';
import { Heading2 } from '@/components/Headings';
import { AdditionalImage } from '@/components/Images';

import crossWritingImage from '../../../../public/images/regular-webp/cross-writing.webp';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata(article);
};

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph>
				As a big fan of{' '}
				<StyledLink
					ariaLabel="Happy Halley, MetaCritic"
					href="https://www.metacritic.com/tv/happy-valley/"
				>
					Happy Valley
				</StyledLink>
				, I recently visited the gorgeous West Yorkshire market town of
				Hebden Bridge, hoping to see some of the streets where my favourite
				police drama was filmed. I had forgotten that it is also the the{' '}
				<StyledLink
					ariaLabel="BBC News | Hebden Bridge is the UK's lesbian capital"
					href="https://www.bbc.co.uk/news/magazine-16962898"
				>
					UK's lesbian capital
				</StyledLink>
				, so of course, when I went into its delightful{' '}
				<StyledLink
					href="https://bookcasehebden.wordpress.com/"
					ariaLabel="Delightful independent bookshop in Hebden Bridge"
				>
					independent bookshop
				</StyledLink>
				, copies of Anne Lister's Secret Diaries were prominently on
				display.
			</Paragraph>
			<Paragraph>
				<StyledLink
					href="https://en.wikipedia.org/wiki/Anne_Lister"
					ariaLabel="Anne Lister, Wikipedia page"
				>
					Anne Lister
				</StyledLink>{' '}
				(1791 - 1840) was from a minor landowning family, and is sometimes
				known as 'the first modern lesbian'. I had seen the BBC
				dramatisation of her fascinating life,{' '}
				<StyledLink
					href="https://www.metacritic.com/tv/gentleman-jack/"
					ariaLabel="Gentleman Jack on Metacritic"
				>
					Gentleman Jack
				</StyledLink>
				, so I was immediately interested. I knew she had a strong
				personality, eccentric habits, a masculine appearance, and
				challenged the status-quo, but I didn't know that her diaries were
				partially written in code to conceal (amongst other things) her
				homosexuality. I bought a copy and finished it a week later.
			</Paragraph>

			<Heading2>The Code Itself</Heading2>
			<Paragraph>
				The code itself isn't too interesting. It's a simple character
				substitution cipher that uses Greek letters and made-up symbols in
				place of plain English. What is interesting though, is that she
				alternated between 'plainhand' - normal writing, and 'crypthand' -
				coded messages. In the Helena Whitbread edition that I read, the
				crypthand passages are written in italics, clearly differentiating
				the parts that Anne didn't want unsympathetic eyes to see. Yet more
				fascinating though, is the story of the diaries themselves, and how
				they were handled by the people who inherited them.
			</Paragraph>

			<Heading2>Quick to crack; Slow to surface</Heading2>
			<Paragraph>
				After Anne's death, the diaries remained untouched at her ancestral
				home, Shibden Hall, for over 50 years, until John Lister - who
				inherited the estate in the late 19th century - cracked the code
				with the help of a friend. The friend was so scandalised that he
				suggested burning the diaries, but John, as a lover of history with
				more respect for such an important resource, instead decided to
				publish a homophobe-friendly portion of the diaries in a local
				newspaper, and then hid the pages behind a panel at his hall, where
				they would remain until after his death in the 1930s.
			</Paragraph>
			<Paragraph>
				Some years before he died, John had become bankrupt, but a
				philanthropist friend stepped in and purchased the estate, allowing
				John to remain there until his death, at which point ownership would
				be transferred to the Borough of Halifax, for use as a public park
				and museum. As the house was being converted in 1934, an inventory
				was taken and the diaries were found. A copy of the key to the code
				was - reluctantly - obtained from John's bigoted friend, and the
				secret was discovered. The diaries were, however, simply catalogued
				and indexed - their true nature and significance remained a secret.
			</Paragraph>
			<Paragraph>
				The secret code remained private for several more decades, then in
				1958 another researcher worked with and reported on the diaries. She
				too had discovered the truth, but decided to lie about the lesbian
				content of the cryptic passages, saying they were 'excruciatingly
				tedious to the modern mind', and of no historical interest. At this
				point, still only a few scholars and town officials knew the truth.
			</Paragraph>

			<Heading2>Helena Whitbread and full disclosure</Heading2>
			<Paragraph>
				It wasn't until the mid-1980s that researcher Helena Whitbread
				discovered the diaries at the Shibden Hall archives. She
				meticulously transcribed and decoded the entire collection, finally
				bringing Anne Lister's story into the public view. This was a
				laborious endeavour, as the handwriting was very small, and the
				letters{' '}
				<StyledLink
					href="https://www.janeaustensummer.org/post/caught-in-the-cross-writing"
					ariaLabel="Explanation of cross-writing"
				>
					cross-written
				</StyledLink>{' '}
				- a common practice in the nineteenth century due to the cost of
				paper.
			</Paragraph>
			<AdditionalImage
				image={crossWritingImage}
				alt={`Anne Lister's diaries were cross written to save money on paper`}
				border
			/>
			<Paragraph>
				Helena Whitbread recognised the historical importance of the diaries
				and ensured they were shared with the world. Her work deciphering
				the diaries and understand the historical context make her book a
				significant contribution to LGBTQ+ history, offering us a rare and
				unfiltered glimpse into the mind of a historical homosexual.
			</Paragraph>

			<Heading2>Code as a shield</Heading2>
			<Paragraph>
				Whatever the diaries reveal about Anne's psychology (She wanted to
				live with a female partner and spend quality time with her!
				Scandalous!!) they say a lot more about the unaccepting society she
				lived in. The content she chose to conceal exposes the harsh
				realities of her life as a lesbian in a time when homosexuality was
				socially unacceptable. She couldn't be openly gay, so her code
				functioned as a shield, allowing her to access to the therapeutic
				power of writing while protecting herself from persecution. This
				dispels the misconception that I had previously held, that female
				homosexuality was historically more tolerated than its male
				counterpart. The myth that Queen Victoria didn't explicitly
				criminalise lesbian sex because she didn't believe it occurred{' '}
				<StyledLink
					href="https://www.open.edu/openlearn/society-politics-law/law/lesbianism-and-the-criminal-law-england-and-wales"
					ariaLabel="Article on lesbianism and criminal law in England and Wales"
				>
					is not true
				</StyledLink>
				. Lesbians were, in fact, persecuted since at least the end of the
				17th century, and societal pressures were indeed suffocating, as the
				diaries so plainly attest.
			</Paragraph>

			<Heading2>What if she didn't write in code?</Heading2>
			<Paragraph>
				I couldn't help but think: what would happen if Anne had simply
				written freely about her true desires? Would the pages have been
				preserved? Would John Lister have been happy to simply hide them
				behind a panel or would have feared that his reputation would be at
				stake if they got into the wrong hands? Would he still have
				published excerpts in the newspaper? I'm tempted to think they might
				simply have been burned. We might know nothing at all about Anne
				Lister's thoughts and feelings had she not devised her secret
				cipher.
			</Paragraph>
			<Paragraph>
				Beyond its historical significance, Anne Lister's coded diary serves
				as a testament to the enduring human desire for love and
				self-expression, whatever the constraints of the day. It's a
				fascinating book, for so many reasons. Anne was an inspiring
				character who wasn't afraid to go against the grain a little, but
				still she couldn't live a truly authentic life.
			</Paragraph>
			<Paragraph className="font-bold">
				Helena Whitbread's edition of Anne Lister's letters is packed full
				of insights into the social and historical context in which Anne
				lived, and the diaries are a powerful story of a determined woman
				using her wits to navigate the rigid societal constraints of her
				time.
			</Paragraph>
		</ArticleLayout>
	);
}
