import type { Metadata } from 'next'
import Link from 'next/link'

import { FreelanceEnquiryForm } from '@/components/forms/FreelanceEnquiryForm'
import { ArrowRight, Button } from '@/components/ui/Button'
import { Faq } from '@/components/ui/Faq'
import { Section } from '@/components/ui/Section'
import {
  AccentLine,
  DashedDivider,
  Eyebrow,
  SectionHeading,
} from '@/components/ui/brand'
import { ExclusionList } from '@/components/ui/lists'
import { engagementModels, freelanceExclusions, freelanceServices } from '@/content/audience'
import { freelanceFaqs } from '@/content/faqs'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Freelance support',
  description:
    'Flexible website development support for agencies, designers and small teams. Landing pages, responsive front-end work, design-to-web implementation, QA and launch support.',
  alternates: { canonical: '/freelance-support/' },
  openGraph: {
    title: 'Freelance website development support — Lars Assen',
    description:
      'Available for selected project-based, subcontract and part-time website engagements.',
    url: '/freelance-support/',
  },
}

export default function FreelanceSupportPage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <EngagementSection />
      <ScopeSection />
      <FaqSection />
      <EnquirySection />
      <BackToMainOffer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(freelanceFaqs, '/freelance-support/'),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Freelance support', href: '/freelance-support/' },
            ]),
          ]),
        }}
      />
    </>
  )
}

/* --------------------------------------------------------------------------
   The page opens by naming its audience, so a small-business owner who arrives
   here by accident knows within one line that this is not the page for them.
   -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="bg-dusk text-linen">
      <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <AccentLine />
        <Eyebrow tone="dark" className="mt-5 block">
          For agencies, designers &amp; small teams
        </Eyebrow>

        <h1 className="mt-6 max-w-[20ch] text-[2.25rem] leading-[1.1] sm:text-5xl">
          Flexible website development support for agencies and small teams.
        </h1>

        <p className="mt-8 measure text-lg text-mist">
          Available for selected project-based, subcontract and part-time
          website engagements.
        </p>

        <div className="mt-10">
          <Button href="#freelance-enquiry" variant="onDark" size="lg">
            Send a project brief
            <ArrowRight />
          </Button>
        </div>

        <DashedDivider tone="dark" className="mt-14" />

        <p className="mt-6 measure text-sm text-mist">
          Running a small business and looking for a website of your own? That
          is my main service and it lives{' '}
          <Link
            href="/website-builds/"
            className="text-dawn-bright underline underline-offset-4 transition-colors duration-200 hover:text-linen"
          >
            on the website builds page
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
function ServicesSection() {
  return (
    <Section size="lg" aria-labelledby="services-title">
      <SectionHeading
        id="services-title"
        eyebrow="Services"
        title="Clearly scoped website and front-end delivery."
        lead="Work that has a defined shape and a definite end. That is where I am useful to a team."
      />

      <div className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {freelanceServices.map((service) => (
          <div key={service.title}>
            <span aria-hidden="true" className="block h-px w-8 bg-ember" />
            <h3 className="mt-4 text-lg">{service.title}</h3>
            <p className="mt-2 text-ink-muted">{service.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function EngagementSection() {
  return (
    <Section tone="sunk" size="lg" aria-labelledby="engagement-title">
      <SectionHeading
        id="engagement-title"
        eyebrow="Engagement models"
        title="Four ways to work together."
        lead="Whichever suits your process. The commercial arrangement matters less to me than the scope being clear."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {engagementModels.map((model, index) => (
          <div
            key={model.title}
            className="rounded-sm border border-hairline bg-paper p-7"
          >
            <span className="eyebrow text-ember-deep">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-xl">{model.title}</h3>
            <p className="mt-2 text-ink-muted">{model.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function ScopeSection() {
  return (
    <Section size="lg" aria-labelledby="scope-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <SectionHeading
          id="scope-title"
          eyebrow="What I do not take on"
          title="My best work comes from clearly scoped delivery."
          lead="I am not currently taking on e-commerce operations, general IT support or open-ended maintenance roles. Saying so up front saves us both a conversation."
        />

        <div className="self-center rounded-sm border border-hairline bg-paper-sunk/50 p-7 sm:p-9">
          <ExclusionList items={freelanceExclusions} />
        </div>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function FaqSection() {
  return (
    <Section tone="sunk" size="lg" aria-labelledby="freelance-faq-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="freelance-faq-title"
            eyebrow="Questions"
            title="Practicalities."
          />
        </div>
        <Faq items={freelanceFaqs} />
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function EnquirySection() {
  return (
    <Section
      size="lg"
      id="freelance-enquiry"
      aria-labelledby="freelance-enquiry-title"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="freelance-enquiry-title"
            eyebrow="Freelance enquiry"
            title="Send through the brief."
            lead="Scope, dates and rate range are the four things that let me give you a straight yes or no quickly."
          />
        </div>

        <div>
          <FreelanceEnquiryForm />
        </div>
      </div>
    </Section>
  )
}

/* --------------------------------------------------------------------------
   The page ends by pointing back to the primary offer, so freelance support
   never becomes a dead end that competes with website builds.
   -------------------------------------------------------------------------- */
function BackToMainOffer() {
  return (
    <Section tone="midnight" size="sm" as="aside">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Eyebrow tone="dark">Main service</Eyebrow>
          <p className="mt-2 max-w-[42ch] text-lg text-linen">
            Complete website design and build projects for small service
            businesses are the main body of my work.
          </p>
        </div>
        <Button href="/website-builds/" variant="onDarkGhost" className="shrink-0">
          View website builds
          <ArrowRight />
        </Button>
      </div>
    </Section>
  )
}
