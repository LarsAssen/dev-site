import type { Metadata } from 'next'
import Link from 'next/link'

import { FreelanceTeaser } from '@/components/sections/FreelanceTeaser'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { WorkSection } from '@/components/sections/WorkSection'
import { ArrowRight, Button } from '@/components/ui/Button'
import { Faq } from '@/components/ui/Faq'
import { Section } from '@/components/ui/Section'
import {
  AccentLine,
  DashedDivider,
  ElevationLine,
  Eyebrow,
  NumberedBadge,
  Pill,
  SectionHeading,
} from '@/components/ui/brand'
import { CheckList } from '@/components/ui/lists'
import { audiencePositioning, clientTypes, currentFocus } from '@/content/audience'
import { homepageFaqs } from '@/content/faqs'
import {
  completePackage,
  developerLed,
  homepageProblems,
  websiteJobs,
} from '@/content/offer'
import { currentPackagePrice, formatPrice, site } from '@/content/site'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  // `absolute` because the root layout's title template does not apply to
  // metadata declared in the same route segment.
  title: {
    absolute: 'Web design for service businesses — Lars Assen',
  },
  description:
    'Clear, professional website design and development for established service businesses and independent professionals. Based in the Wellington region and available across New Zealand.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <OfferSection />
      <AudienceSection />
      <DeveloperLedSection />
      <ProcessSection variant="compact" />
      <WorkingTogetherSection />
      <WorkSection />
      <FreelanceTeaser />
      <AboutPreview />
      <FaqSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(homepageFaqs, '/')),
        }}
      />
    </>
  )
}

/* --------------------------------------------------------------------------
   1. HERO
   One offer, one headline, one primary button. The freelance option is not
   mentioned here at all.
   -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-midnight text-linen">
      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
        <AccentLine />
        <Eyebrow tone="dark" className="mt-5 block">
          Website design &amp; development &middot; {site.location.region}
        </Eyebrow>

        <h1 className="mt-6 max-w-[16ch] text-[2.5rem] leading-[1.08] sm:text-6xl lg:text-7xl">
          Clear, professional websites for service businesses.
        </h1>

        <p className="mt-8 measure text-lg text-mist sm:text-xl">
          I design and build straightforward, developer-led websites for
          established service businesses and independent professionals who need
          a clearer, stronger online presence.
        </p>

        <p className="mt-4 measure text-mist">
          Based in the {site.location.region} and available for projects across{' '}
          {site.location.country}.
        </p>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
          <Button href="/contact/" size="lg">
            Discuss your website
            <ArrowRight />
          </Button>
          <Link
            href="/website-builds/#included"
            className="text-sm text-linen underline decoration-linen/35 underline-offset-4 transition-colors duration-200 hover:decoration-dawn"
          >
            See what is included
          </Link>
        </div>

        <DashedDivider tone="dark" className="mt-16" />

        {/* Four plain facts, not claims. Mono numerals read as data. */}
        <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <HeroFact term="The offer" detail={completePackage.name} />
          <HeroFact
            term={
              site.pricing.foundingClientPricing
                ? 'Founding-client price'
                : 'Package price'
            }
            detail={formatPrice(currentPackagePrice())}
          />
          <HeroFact term="Typical timeline" detail="3 to 5 weeks" />
          <HeroFact term="Developer-led" detail="Planning through to launch" />
        </dl>
      </div>

      {/* The elevation line, used once, at low contrast. Decorative only. */}
      <ElevationLine
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full opacity-[0.18]"
        strokeClassName="text-dawn"
      />
    </section>
  )
}

function HeroFact({ term, detail }: { term: string; detail: string }) {
  return (
    <div>
      <dt className="eyebrow text-dawn-bright">{term}</dt>
      <dd className="mt-2 text-lg text-linen">{detail}</dd>
    </div>
  )
}

/* --------------------------------------------------------------------------
   2. PROBLEM AND OUTCOME
   -------------------------------------------------------------------------- */
function ProblemSection() {
  return (
    <Section size="lg" aria-labelledby="problem-title">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            id="problem-title"
            eyebrow="The problem"
            title="A website has about ten seconds to answer four questions."
            lead="Someone lands on your site, usually on a phone, usually while comparing you against two other options. If they cannot work these out quickly, they leave and you never know they were there."
          />
        </div>

        <ol className="grid gap-5 self-start sm:grid-cols-2">
          {websiteJobs.map((job, index) => (
            <li
              key={job}
              className="flex items-center gap-4 rounded-sm border border-hairline bg-paper-sunk/50 p-5"
            >
              <NumberedBadge n={index + 1} />
              <span className="font-medium text-ink">{job}</span>
            </li>
          ))}
        </ol>
      </div>

      <DashedDivider className="my-16" />

      <h3 className="text-xl font-medium">What usually gets in the way</h3>
      {/* Three of the six. The rest are on the Website Builds page, which this
          links to — the homepage summarises, the sales page convinces. */}
      <div className="mt-8 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {homepageProblems.map((problem) => (
          <div key={problem.title}>
            <span aria-hidden="true" className="block h-px w-8 bg-ember" />
            <h4 className="mt-4 text-lg">{problem.title}</h4>
            <p className="mt-2 text-ink-muted">{problem.body}</p>
          </div>
        ))}
      </div>

      <Link
        href="/website-builds/#problems-title"
        className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-ember-deep underline decoration-sand underline-offset-4 transition-colors duration-200 hover:decoration-ember-deep"
      >
        See the rest of what this fixes
        <ArrowRight />
      </Link>
    </Section>
  )
}

/* --------------------------------------------------------------------------
   3. MAIN OFFER
   The strongest visual moment on the page after the hero.
   -------------------------------------------------------------------------- */
function OfferSection() {
  return (
    <Section tone="sunk" size="lg" id="offer" aria-labelledby="offer-title">
      <SectionHeading
        id="offer-title"
        eyebrow={completePackage.name}
        title="Everything needed for a clear, professional service-business website."
        lead={completePackage.summary}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <div className="rounded-sm border border-hairline bg-paper p-7 sm:p-10">
          <h3 className="eyebrow text-ember-deep">What is included</h3>
          <CheckList
            items={completePackage.highlights}
            columns={2}
            className="mt-6"
          />
        </div>

        {/* Pricing panel. The six facts someone needs before clicking through:
            both prices, timeline, pages, revisions and the payment split. */}
        <div className="flex flex-col rounded-sm bg-midnight p-7 text-linen sm:p-10">
          {site.pricing.foundingClientPricing ? (
            <Pill className="self-start">Founding-client price</Pill>
          ) : null}

          <p className="mt-6 font-display text-4xl leading-none">
            {formatPrice(currentPackagePrice())}
          </p>
          {site.pricing.foundingClientPricing ? (
            <p className="mt-4 text-mist">
              For the first {site.pricing.foundingClientProjects} suitable
              projects. The standard package price afterwards will be{' '}
              {formatPrice(site.pricing.standardPackagePrice)}.
            </p>
          ) : (
            <p className="mt-4 text-mist">
              A fixed price for the defined package, agreed in writing before
              any work starts.
            </p>
          )}

          <DashedDivider tone="dark" className="my-6" />

          <dl className="space-y-3 text-sm">
            <PackageFact term="Timeline" detail="3 to 5 weeks" />
            <PackageFact term="Pages" detail="Up to six core pages" />
            <PackageFact term="Revisions" detail="Two structured rounds" />
            <PackageFact
              term="Payment"
              detail="50% before work, 50% before launch"
            />
          </dl>

          <Button
            href="/contact/"
            variant="onDark"
            size="lg"
            className="mt-8 w-full"
          >
            Discuss your website
            <ArrowRight />
          </Button>
          <Link
            href="/website-builds/"
            className="mt-4 text-center text-sm text-mist underline decoration-mist/40 underline-offset-4 transition-colors duration-200 hover:text-dawn"
          >
            See the full breakdown
          </Link>
        </div>
      </div>

      {/* One line only. The full care plan lives on the Website Builds page. */}
      <p className="mt-8 text-sm text-ink-muted">
        Optional website care is available after launch from{' '}
        {formatPrice(site.pricing.carePlanMonthly)} per month.{' '}
        <Link
          href="/website-builds/#care-plan"
          className="text-ember-deep underline decoration-sand underline-offset-4 transition-colors duration-200 hover:decoration-ember-deep"
        >
          See what it covers
        </Link>
        .
      </p>
    </Section>
  )
}

function PackageFact({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="eyebrow shrink-0 text-dawn-bright">{term}</dt>
      <dd className="text-right text-mist">{detail}</dd>
    </div>
  )
}

/* --------------------------------------------------------------------------
   4. WHO IT IS FOR
   -------------------------------------------------------------------------- */
function AudienceSection() {
  return (
    <Section size="lg" aria-labelledby="audience-title">
      <SectionHeading
        id="audience-title"
        eyebrow="Who this is for"
        title="Established service businesses and independent professionals."
        lead={audiencePositioning}
      />

      {/* Labels only here. The descriptions and the qualifying checklist are
          on the Website Builds page, where someone is actually deciding. */}
      <ul className="mt-12 grid gap-x-12 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {clientTypes.map((type) => (
          <li key={type.label} className="flex items-start gap-3">
            <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-ember" />
            <span className="text-lg text-ink">{type.label}</span>
          </li>
        ))}
      </ul>

      {/* The current focus, kept quieter than the broad positioning above. */}
      <p className="mt-10 measure text-sm text-ink-muted">{currentFocus}</p>

      <Link
        href="/website-builds/#suitable-title"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ember-deep underline decoration-sand underline-offset-4 transition-colors duration-200 hover:decoration-ember-deep"
      >
        Check whether your project is a good fit
        <ArrowRight />
      </Link>
    </Section>
  )
}

/* --------------------------------------------------------------------------
   5. DEVELOPER-LED
   The commercial point of difference, stated without comparing myself to
   anyone else. Kept to the same two-column shape used elsewhere so it does
   not unbalance the page.
   -------------------------------------------------------------------------- */
function DeveloperLedSection() {
  return (
    <Section tone="sunk" size="lg" aria-labelledby="developer-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <SectionHeading
          id="developer-title"
          eyebrow={developerLed.eyebrow}
          title={developerLed.title}
        />

        <div className="space-y-5">
          {developerLed.body.map((paragraph) => (
            <p key={paragraph} className="measure text-lg text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
        {developerLed.points.map((point) => (
          <div key={point.title}>
            <span aria-hidden="true" className="block h-px w-8 bg-ember" />
            <h3 className="mt-4 text-lg">{point.title}</h3>
            <p className="mt-2 text-ink-muted">{point.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* --------------------------------------------------------------------------
   6. WHAT WORKING WITH ME IS LIKE
   Trust built from how the work runs, since there is no client history yet.
   -------------------------------------------------------------------------- */
const workingPrinciples = [
  {
    title: 'You talk to the person doing the work',
    body: 'No account manager relaying messages, no team you never meet. You send a question, I answer it.',
  },
  {
    title: 'The scope is written down',
    body: 'Pages, inclusions, revision rounds, payment schedule and price are agreed in writing before anything starts. If a request falls outside it, I tell you before I act on it, not after.',
  },
  {
    title: 'Mobile is designed first',
    body: 'Most of your visitors will be on a phone, so that is where the layout decisions start rather than where they get squeezed in at the end.',
  },
  {
    title: 'Practical over clever',
    body: 'If a simpler solution does the job, that is the one I build. Websites that are complicated to run tend to stop being run.',
  },
  {
    title: 'Honest recommendations',
    body: 'If you do not need something, I will say so, including when that means a smaller project. If your site is fine and only needs a tidy-up, I will tell you that too.',
  },
  {
    title: 'Modern tools, used with judgment',
    body: 'I use current tooling, including AI where it genuinely speeds up the routine parts. The structure, the design decisions and the final quality are mine.',
  },
]

function WorkingTogetherSection() {
  return (
    <Section size="lg" aria-labelledby="working-title">
      <SectionHeading
        id="working-title"
        eyebrow="Working together"
        title="What working with me is actually like."
        lead="I have no client testimonials to show you yet, so here is the next most useful thing: exactly how I work, stated plainly enough that you can hold me to it."
      />

      <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {workingPrinciples.map((principle) => (
          <div key={principle.title}>
            <span aria-hidden="true" className="block h-px w-8 bg-ember" />
            <h3 className="mt-4 text-lg">{principle.title}</h3>
            <p className="mt-2 text-ink-muted">{principle.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* --------------------------------------------------------------------------
   9. ABOUT PREVIEW
   -------------------------------------------------------------------------- */
function AboutPreview() {
  return (
    <Section tone="dusk" size="lg" aria-labelledby="about-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <AccentLine />
          <Eyebrow tone="dark" className="mt-5 block">
            About
          </Eyebrow>
          <h2 id="about-title" className="mt-3 text-3xl sm:text-4xl">
            I am Lars.
          </h2>
        </div>

        <div>
          <p className="measure text-lg text-linen">
            I am a website designer and software developer based in the{' '}
            {site.location.region} of {site.location.country}. I help service
            businesses turn scattered ideas and outdated websites into clear,
            professional online experiences.
          </p>
          <p className="mt-5 measure text-mist">
            My background combines professional software development with
            hands-on work on websites and digital platforms, alongside project
            coordination and remote collaboration across time zones. That
            combination is why I tend to start with structure and decisions
            rather than with visuals.
          </p>
          <p className="mt-5 measure text-mist">
            The websites I build are meant to be lived with. Straightforward to
            update, easy to explain to someone else, and still sensible in two
            years.
          </p>
          <Link
            href="/about/"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-dawn-bright underline decoration-dawn-bright/40 underline-offset-4 transition-colors duration-200 hover:text-linen"
          >
            Learn more about me
            <ArrowRight />
          </Link>
        </div>
      </div>
    </Section>
  )
}

/* --------------------------------------------------------------------------
   10. FAQ
   -------------------------------------------------------------------------- */
function FaqSection() {
  return (
    <Section size="lg" aria-labelledby="faq-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            eyebrow="Questions"
            title="The things people ask first."
          />
          <Link
            href="/website-builds/#faq"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ember-deep underline decoration-sand underline-offset-4 transition-colors duration-200 hover:decoration-ember-deep"
          >
            All questions, pricing and scope
            <ArrowRight />
          </Link>
        </div>

        {/* Four questions, not ten. The full set is on Website Builds. */}
        <Faq items={homepageFaqs} />
      </div>
    </Section>
  )
}
