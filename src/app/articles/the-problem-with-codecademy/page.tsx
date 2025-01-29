import { generateArticleMetadata } from '@/library/articleMetadata'

import { ArticleLayout } from '../_components/ArticleLayout'
import BlockQuote from '@/app/articles/_components/BlockQuote'
import { AdditionalImage } from '@/app/articles/_components/Images'
import StyledLink from '@/components/StyledLink'

import { article } from './data'

import SchoolOfLifeBook from './images/what-they-forgot-to-teach-you-at-school-school-of-life-book.webp'

export const metadata = generateArticleMetadata(article)

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        {`I invested in a year of access to Codecademy's Full-Stack Pathway, excited to land a web development
        job. But after diving in and using the platform every day for over 6 months, I realised it wasn't the
        perfect one-size-fits-all solution I'd envisioned. Here's why I'm changing my approach, and why you
        might consider doing the same.`}
      </p>

      <h3>{`Love the platform, but here's the catch`}</h3>
      <p>
        Codecademy <em>is</em>
        {` fantastic. It's engaging, well-structured, and a great introduction to coding.
        Their popularity is well-deserved. However, every tool has its limitations.`}
      </p>

      <h3>The certificate trap and the importance of focus</h3>
      <p>
        The Full-Stack Pathway promises a shiny certificate at the end. Unfortunately, that certificate holds
        little weight in the job market - the real prize lies in developing your skills and building a strong
        portfolio. Think about it - would you rather interview someone with a generic certificate (that could
        easily be faked or bought) or someone whose portfolio showcases their ability to solve real-world
        problems using the technologies companies use on a daily basis?
      </p>

      <h3>Focus on your goals, not just completing the course</h3>
      <p>
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
        {`, I decided to step back and think carefully about what I want to achieve, and how I'm going to
        achieve it. As alluring as the prospect of seeing the course progress bar reach 100% is, that won't be
        happening for me.`}
      </p>

      <h3>Why we need to finally leave school:</h3>
      <BlockQuote author="What they forgot to teach you at school, The School of Life">
        School curricula are not reverse engineered from the actual dilemmas of adult life.
      </BlockQuote>
      <ul>
        <li>
          <strong>Lingering Student Mentality:</strong> Even after formal schooling ends, people may
          subconsciously crave external validation and approval from authority figures. They might feel a need
          to follow the rules set by others instead of pursuing their own path. But authority is not
          necessarily benign: schools and teachers are likely looking after their own needs more than they are
          yours.
        </li>
        <li>
          <strong>Questioning External Measures of Success:</strong> The School of Life criticises the idea
          that exams and grades are the ultimate measure of worth. They argue for finding your own internal
          sense of fulfilment rather than relying on external validation.
        </li>
        <li>
          <strong>There is no perfect curriculum:</strong>
          {` Leaving the metaphorical school requires embracing
          the uncertain and messy nature of life. It's about taking risks and learning from experience rather
          than seeking the false comfort of a clear-cut path.`}
        </li>
        <li>
          <strong>Challenging the Myth of Complete Knowledge:</strong>
          {` Schools (and Codecademy) subtly
          perpetuate the idea that everything worth knowing is already known, and you only have to study hard,
          reach 100% course progress, and then you'll be perfect. This is simply not true, especially in
          computer programming. There's always more to discover, understand, invent, and build. Nothing is
          perfect yet, and everything can always be improved.`}
        </li>
      </ul>

      <AdditionalImage
        image={SchoolOfLifeBook}
        alt="What they forgot to teach you at School, School of Life book"
      />

      <h3>Skip the Fluff, Prioritise what Matters</h3>
      <p>
        {`I won't be completing every aspect of the course, and I won't be collecting a certificate. I might get
        to 90%, perhaps - here's what I'll be missing out:`}
      </p>
      <ul>
        <li>
          <strong>Useless Projects:</strong>
          {` Some projects simply won't impress potential employers. I'm
          focussed on building useful websites that demonstrate my skills and solve a real-life problem,
          relevant to the jobs I want to apply for.`}
        </li>
        <li>
          <strong>Broken Assessments:</strong> Bug-infested assessments can be frustrating and a waste of
          time.
        </li>
        <li>
          <strong>Outdated Course Material:</strong> Codecademy can be slow to keep up with fast-paced
          technology (like React and Redux). Learning from official documentation might be less user-friendly,
          but the content is more relevant.
        </li>
        <li>
          <strong>Streak Obsession:</strong>
          {` Codecademy is highly gamified, but don't get caught up in
          maintaining a daily streak. Taking breaks to focus on portfolio projects is crucial if you want to
          be employable, and ultimately, they don't have an actual prize to offer you.`}
        </li>
      </ul>

      <h3>Learn What You Need, Not What They Teach</h3>
      <p>
        {`If you're serious about landing a coding job, delve into real job descriptions. Find out the specific
        technologies companies are looking for, and include them in your learning plan. Remember, Codecademy
        aims for a broad audience, not the specific needs of the job market in your area.`}
      </p>

      <h2>A Launchpad, Not a Destination</h2>
      <p>
        {`Codecademy is a valuable learning platform, and I've gained a lot
				from using it, but it's not a magic bullet - I won't be wasting my
				time on course content that doesn't align with my goals. Don't let
				Codecademy's business objectives disrupt your coding ambitions.`}
      </p>
    </ArticleLayout>
  )
}
