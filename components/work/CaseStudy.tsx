import Image from 'next/image'

import { Container, Section } from '@/components/ui/Section'
import {
  AccentLine,
  DashedDivider,
  Eyebrow,
  NumberedBadge,
  Pill,
} from '@/components/ui/brand'
import { type Project, statusLabels } from '@/content/projects'

/**
 * Renders a full case study from a Project. Every section below is optional —
 * whatever is missing from the data is simply not rendered, so a short project
 * write-up and a detailed one both come out looking deliberate.
 */
export function CaseStudy({ project }: { project: Project }) {
  return (
    <article>
      {/* --- Header --- */}
      <Section tone="midnight" size="md">
        <div className="flex flex-wrap items-center gap-3">
          <Pill>{statusLabels[project.status]}</Pill>
          <Eyebrow tone="dark">{project.projectType}</Eyebrow>
          <Eyebrow tone="dark">{project.completed}</Eyebrow>
        </div>
        <h1 className="mt-6 max-w-[20ch] text-4xl sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-6 measure text-lg text-mist">{project.summary}</p>

        <DashedDivider tone="dark" className="my-10" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <MetaBlock label="Services">
            <ul className="space-y-1">
              {project.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </MetaBlock>
          {project.role ? (
            <MetaBlock label="My role">{project.role}</MetaBlock>
          ) : null}
          {project.link ? (
            <MetaBlock label="Live site">
              <a
                href={project.link.href}
                rel="noopener"
                className="text-dawn underline underline-offset-4 transition-colors duration-200 hover:text-linen"
              >
                {project.link.label}
              </a>
            </MetaBlock>
          ) : null}
        </div>
      </Section>

      {/* --- Cover image --- */}
      <div className="bg-midnight">
        <Container>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            priority
            className="w-full rounded-sm border border-hairline-dark"
            sizes="(min-width: 1152px) 64rem, 100vw"
          />
        </Container>
        <div className="h-16 sm:h-24" />
      </div>

      {/* --- Narrative --- */}
      <Section size="lg">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <AccentLine />
            <p className="eyebrow mt-5 text-ember-deep">The project</p>
          </div>

          <div className="space-y-12">
            {project.challenge ? (
              <Passage title="The challenge" body={project.challenge} />
            ) : null}
            {project.solution ? (
              <Passage title="What I did" body={project.solution} />
            ) : null}

            {project.keyDecisions && project.keyDecisions.length > 0 ? (
              <div>
                <h2 className="text-2xl">Key decisions</h2>
                <ol className="mt-6 space-y-6">
                  {project.keyDecisions.map((item, index) => (
                    <li key={item.decision} className="flex gap-5">
                      <NumberedBadge n={index + 1} />
                      <div>
                        <h3 className="text-lg font-medium">
                          {item.decision}
                        </h3>
                        <p className="mt-2 measure text-ink-muted">
                          {item.reasoning}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            {project.outcome ? (
              <Passage title="The outcome" body={project.outcome} />
            ) : null}
          </div>
        </div>
      </Section>

      {/* --- Further images --- */}
      {project.images && project.images.length > 0 ? (
        <Section tone="sunk" size="md">
          <div className="space-y-12">
            {project.images.map((image) => (
              <figure key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full rounded-sm border border-hairline"
                  sizes="(min-width: 1152px) 64rem, 100vw"
                />
                {image.caption ? (
                  <figcaption className="mt-4 text-sm text-ink-muted">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </Section>
      ) : null}

      {/* --- Testimonial. Only rendered when a real, permitted quote exists. --- */}
      {project.testimonial ? (
        <Section tone="canopy" size="md">
          <figure className="mx-auto max-w-3xl text-center">
            <AccentLine className="mx-auto" />
            <blockquote className="mt-8 font-display text-2xl italic leading-snug sm:text-3xl">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="eyebrow mt-8 text-linen">
              {project.testimonial.name} &middot; {project.testimonial.role}
            </figcaption>
          </figure>
        </Section>
      ) : null}
    </article>
  )
}

function MetaBlock({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <Eyebrow tone="dark">{label}</Eyebrow>
      <div className="mt-3 text-linen">{children}</div>
    </div>
  )
}

function Passage({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <p className="mt-4 measure text-lg text-ink-muted">{body}</p>
    </div>
  )
}
