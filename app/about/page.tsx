import type { Metadata } from 'next'

import { PageHero } from '@/components/layout/PageHero'
import { ArrowRight, Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import {
  AccentLine,
  DashedDivider,
  SectionHeading,
} from '@/components/ui/brand'
import { RuleList } from '@/components/ui/lists'
import { site } from '@/content/site'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About',
  description:
    'I am Lars, a website designer and software developer based in the Wellington region. I build clear, maintainable websites for established service businesses and provide selected development support to agencies and small teams.',
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'About — Lars Assen',
    description:
      'Website designer and software developer based in the Wellington region of New Zealand.',
    url: '/about/',
  },
}

const background = [
  {
    title: 'Websites and digital platforms',
    body: 'Hands-on work building and maintaining websites, and working inside the platforms and tools that sit behind them. Enough exposure to know which problems are worth solving properly and which are not worth introducing in the first place.',
  },
  {
    title: 'Technical problem-solving',
    body: 'Working out why something is not behaving, in situations where the documentation does not cover it. Most of the value in a build sits in the awkward twenty percent.',
  },
  {
    title: 'Project coordination',
    body: 'Keeping work moving between people, tracking what is outstanding, and making sure the next decision has actually been made. This is the part that keeps projects from stalling.',
  },
  {
    title: 'Remote collaboration',
    body: 'Working with people across time zones, where clear written communication is not a nice extra but the only thing holding the work together.',
  },
  {
    title: 'Direct communication',
    body: 'One point of contact from the first conversation through to handover. Nothing is relayed through an account manager, and nothing gets lost between people who have never spoken to each other.',
  },
  {
    title: 'Modern tools, used with judgement',
    body: 'Current tooling, including AI where it removes genuine drudgery from routine tasks. It speeds up the boring parts. The planning, design decisions, development, testing and final quality are mine.',
  },
]

const values = [
  'Clarity — if I cannot explain a decision plainly, it is probably the wrong decision',
  'Reliability — doing what I said I would do, on the date I said I would do it',
  'Honest communication — including when the honest answer is no, or not yet, or that is outside what I do',
  'Thoughtful structure — the order information appears in matters more than how it is decorated',
  'Practical problem-solving — the simplest thing that genuinely works, rather than the most impressive-sounding one',
  'Simplicity — fewer moving parts means fewer things to go wrong after I have handed it over',
  'Maintainable solutions — you should be able to hand this site to someone else and have them understand it',
]

export default function AboutPage() {
  return (
    <>
      <Hero />
      <DevelopmentBackgroundSection />
      <BackgroundSection />
      <ApproachSection />
      <ValuesSection />
      <LocationSection />
      <PersonalNote />
      <CtaSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about/' },
            ]),
          ),
        }}
      />
    </>
  )
}

/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <PageHero
      breadcrumb="About"
      eyebrow="About"
      title="I am Lars, a website designer and software developer."
      titleClassName="max-w-[24ch]"
      lead={
        <>
          I am based in the {site.location.region} of {site.location.country}. I
          combine clear website design with a professional software-development
          background to build reliable, maintainable websites for service
          businesses.
        </>
      }
      showElevationLine
    />
  )
}

/* --------------------------------------------------------------------------
   The development background gets its own section directly under the hero,
   because it is the thing that distinguishes the service commercially. The
   supporting points that go with it are on the homepage; this page explains
   why it matters rather than repeating them.
   -------------------------------------------------------------------------- */
function DevelopmentBackgroundSection() {
  return (
    <Section size="lg" aria-labelledby="development-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <SectionHeading
          id="development-title"
          eyebrow="Developer-led"
          title="Professional software-development background."
        />

        <div className="space-y-5 text-lg">
          <p className="measure text-ink">
            My background includes professional software development and
            hands-on work with websites and digital platforms. I understand the
            code, systems and technical trade-offs behind the interface, not
            only the visible design.
          </p>
          <p className="measure text-ink-muted">
            That experience matters when a website needs to behave properly
            across devices, connect forms and analytics, remain maintainable and
            handle the unexpected issues that emerge during a real build.
          </p>
          <p className="measure text-ink-muted">
            It also means the person you talk to is the person doing the work. I
            handle the planning, design, development, testing and launch
            directly, so a technical question does not have to travel through
            anyone else to reach someone who can answer it.
          </p>
        </div>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function BackgroundSection() {
  return (
    <Section tone="sunk" size="lg" aria-labelledby="background-title">
      <SectionHeading
        id="background-title"
        eyebrow="Background"
        title="What I bring to a website project."
        lead="Not a career history. The parts of my background that actually affect the work you would be paying for."
      />

      <div className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {background.map((item) => (
          <div key={item.title}>
            <span aria-hidden="true" className="block h-px w-8 bg-ember" />
            <h3 className="mt-4 text-lg">{item.title}</h3>
            <p className="mt-2 text-ink-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function ApproachSection() {
  return (
    <Section size="lg" aria-labelledby="approach-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <SectionHeading
          id="approach-title"
          eyebrow="Approach"
          title="Structure first, decoration second."
        />

        <div className="space-y-5 text-lg">
          <p className="measure text-ink">
            Most websites that are not working are not failing because they look
            dated. They are failing because nobody decided what should be on
            them, in what order, and what a visitor was supposed to do next.
          </p>
          <p className="measure text-ink-muted">
            So I start with structure. What pages exist, what each one is for,
            what question it answers, and where it leads. Once that is settled,
            the design work becomes far more straightforward — and the finished
            site holds together instead of being a set of pages that happen to
            share a colour scheme.
          </p>
          <p className="measure text-ink-muted">
            I build on real pages rather than static mockups, so you see the
            actual thing on an actual phone rather than an image of it. It makes
            feedback more honest and catches the problems that only show up when
            real content meets a real screen.
          </p>
          <p className="measure text-ink-muted">
            And I try to keep things boring where boring is better. A website
            that is simple to update is a website that stays current.
          </p>
        </div>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function ValuesSection() {
  return (
    <Section tone="sunk" size="lg" aria-labelledby="values-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <SectionHeading
          id="values-title"
          eyebrow="What I value"
          title="What I try to hold to in client work."
          lead="Stated here so you have something concrete to measure me against."
        />
        <div className="self-center">
          <RuleList items={values} />
        </div>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function LocationSection() {
  return (
    <Section tone="dusk" size="md" aria-labelledby="location-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <SectionHeading
          id="location-title"
          eyebrow="Location"
          title="Based in the Wellington region, working remotely."
          tone="dark"
        />
        <div className="space-y-5 self-center">
          <p className="measure text-lg text-linen">
            I am in the {site.location.region}, and I work with clients
            throughout New Zealand and further afield. Almost everything happens
            over video calls, email and shared links, which suits most projects
            better than travel does.
          </p>
          <p className="measure text-mist">
            If you are local and would rather meet in person for the first
            conversation, that is easy to arrange. If you are not, it makes no
            difference to the work — the process is the same either way.
          </p>
        </div>
      </div>
    </Section>
  )
}

/* --------------------------------------------------------------------------
   Kept genuinely short. This is a website services page, not a personal blog,
   and the interests here are context rather than a second offer.
   -------------------------------------------------------------------------- */
function PersonalNote() {
  return (
    <Section size="md" aria-labelledby="personal-title">
      <div className="mx-auto max-w-3xl">
        <AccentLine />
        <h2 id="personal-title" className="mt-6 text-2xl sm:text-3xl">
          Outside of work.
        </h2>
        <p className="mt-5 text-lg text-ink-muted">
          Most of my spare time goes into running, strength training and being
          outdoors. It is where I do my clearest thinking, and it is probably
          why I have so little patience for things that are more complicated
          than they need to be.
        </p>
        <DashedDivider className="mt-10" />
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function CtaSection() {
  return (
    <Section tone="canopy" size="md" as="aside">
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <AccentLine />
          <h2 className="mt-6 max-w-[22ch] text-2xl sm:text-3xl">
            If that sounds like the right fit, tell me about your project.
          </h2>
        </div>
        <Button
          href="/contact/"
          variant="onDark"
          size="lg"
          className="shrink-0"
        >
          Discuss your website
          <ArrowRight />
        </Button>
      </div>
    </Section>
  )
}
