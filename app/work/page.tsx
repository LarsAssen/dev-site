import type { Metadata } from 'next'

import { PageHero } from '@/components/layout/PageHero'
import { EarlyClientPanel } from '@/components/sections/WorkSection'
import { Section } from '@/components/ui/Section'
import {
  AccentLine,
  DashedDivider,
  NumberedBadge,
} from '@/components/ui/brand'
import { ProjectGrid } from '@/components/work/ProjectCard'
import { projects } from '@/content/projects'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'The first collection of website projects for this focused service is being built. Each case study will cover the challenge, my role, the decisions made and the outcome.',
  alternates: { canonical: '/work/' },
  openGraph: {
    title: 'Work — Lars Assen',
    description:
      'Website projects for established service businesses. The first collection is currently being built.',
    url: '/work/',
  },
}

/** What every case study on this page will contain, once there are projects. */
const caseStudyStructure = [
  {
    title: 'The challenge',
    body: 'The situation the business was in, and the specific problem the website had to solve.',
  },
  {
    title: 'My role',
    body: 'Exactly what I was responsible for on the project, and what I was not.',
  },
  {
    title: 'Key decisions',
    body: 'The choices that shaped the result — what was decided, and the reasoning behind it.',
  },
  {
    title: 'The outcome',
    body: 'What actually changed, described in plain terms rather than invented statistics.',
  },
]

export default function WorkPage() {
  const hasProjects = projects.length > 0

  return (
    <>
      <PageHero
        breadcrumb="Work"
        eyebrow="Work"
        title={
          hasProjects
            ? 'Selected website projects.'
            : 'Work is being added here.'
        }
        titleClassName="max-w-[18ch]"
        lead={
          hasProjects
            ? 'Each case study explains the challenge, my role, the decisions made and the final outcome.'
            : 'I am currently building the first collection of work for this focused website service. New projects and detailed case studies will be added here as they are completed.'
        }
      />

      {hasProjects ? (
        <Section size="lg">
          <ProjectGrid projects={projects} />
        </Section>
      ) : (
        <>
          {/* Rather than an apology or an empty grid, the space is used to set
              out exactly what will appear here and on what terms. */}
          <Section size="lg" aria-labelledby="approach-title">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
              <div>
                <AccentLine />
                <h2
                  id="approach-title"
                  className="mt-6 text-3xl sm:text-[2.5rem]"
                >
                  What each case study will contain.
                </h2>
                <p className="mt-5 measure text-ink-muted">
                  Not a gallery of screenshots. A short, honest account of the
                  thinking behind each project, so you can judge how I work
                  rather than only how things look.
                </p>
              </div>

              <ol className="grid gap-6 sm:grid-cols-2 self-start">
                {caseStudyStructure.map((item, index) => (
                  <li
                    key={item.title}
                    className="rounded-sm border border-hairline bg-paper-sunk/50 p-6"
                  >
                    <NumberedBadge n={index + 1} />
                    <h3 className="mt-4 text-lg">{item.title}</h3>
                    <p className="mt-2 text-ink-muted">{item.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <DashedDivider className="my-14" />

            {/* A commitment, stated where it can be checked later. */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Commitment title="No invented results">
                Any figures published here will have come from the client. If a
                project's results were never measured, the case study will say
                what changed and leave it at that.
              </Commitment>
              <Commitment title="Concept work labelled as concept work">
                If I publish a self-initiated project or a design exploration,
                it will be labelled as one. Nothing unpaid will be presented as
                client work.
              </Commitment>
              <Commitment title="Permission, not assumption">
                Where a completed project is suitable for a case study,
                permission to publish it is agreed separately. Any testimonial
                will be a real quote from a real client who agreed to it being
                published, with their name attached — and a testimonial is never
                required.
              </Commitment>
            </div>
          </Section>

          <Section tone="sunk" size="lg" aria-labelledby="early-client-title">
            <h2 id="early-client-title" className="sr-only">
              Become a founding client
            </h2>
            <EarlyClientPanel />
          </Section>
        </>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Work', href: '/work/' },
            ]),
          ),
        }}
      />
    </>
  )
}

function Commitment({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <span aria-hidden="true" className="block h-px w-8 bg-ember" />
      <h3 className="mt-4 text-lg">{title}</h3>
      <p className="mt-2 text-ink-muted">{children}</p>
    </div>
  )
}
