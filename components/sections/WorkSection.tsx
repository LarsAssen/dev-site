import { ArrowRight, Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { ElevationLine, SectionHeading } from '@/components/ui/brand'
import { ProjectGrid } from '@/components/work/ProjectCard'
import { completePackage } from '@/content/offer'
import { featuredProjects, projects } from '@/content/projects'
import { formatPrice, site } from '@/content/site'

/**
 * The work section.
 *
 * While `projects` is empty this renders a deliberate, finished-looking panel
 * explaining that the first collection is being built. As soon as a project is
 * added to content/projects.ts, the grid replaces it automatically. Nothing
 * here fabricates work that does not exist.
 */
export function WorkSection() {
  const featured = featuredProjects(2)
  const hasProjects = featured.length > 0

  return (
    <Section tone="sunk" size="lg" aria-labelledby="work-title">
      <SectionHeading
        id="work-title"
        eyebrow="Work"
        title={
          hasProjects
            ? 'Recent projects.'
            : 'The first projects are being built.'
        }
        lead={
          hasProjects
            ? 'Each case study explains the challenge, my role, the decisions made and the outcome.'
            : 'I am currently building the first collection of projects for this focused service. Each future case study will explain the challenge, my role, the decisions made and the final outcome.'
        }
      />

      {hasProjects ? (
        <>
          <div className="mt-12">
            <ProjectGrid projects={featured} />
          </div>
          {projects.length > featured.length ? (
            <div className="mt-10">
              <Button href="/work/" variant="secondary" size="lg">
                View all work
                <ArrowRight />
              </Button>
            </div>
          ) : null}
        </>
      ) : (
        <EarlyClientPanel />
      )}
    </Section>
  )
}

/**
 * Fills the space a project grid would occupy with something useful: a plain
 * account of what an early client gets, and the way in.
 */
export function EarlyClientPanel() {
  return (
    <div className="mt-12 overflow-hidden rounded-sm bg-canopy text-linen">
      <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <h3 className="text-2xl sm:text-3xl">
            Interested in becoming a founding client?
          </h3>
          <p className="mt-4 measure text-linen/85">
            Founding-client projects are offered at{' '}
            {formatPrice(site.pricing.foundingClientPrice)} while I refine the
            delivery process and build the first collection of completed
            projects for this focused service. The scope, process and
            professional standard remain the same.
          </p>
          <ul className="mt-7 space-y-2.5 text-linen/85">
            {[
              `The ${completePackage.name} at ${formatPrice(site.pricing.foundingClientPrice)} rather than the ${formatPrice(site.pricing.standardPackagePrice)} standard price`,
              'The same scope, process and standard as any later project',
              'Direct access to me throughout, with no account management layer',
              'Where a completed project is suitable for a case study, permission to publish it is agreed separately — a testimonial is never required',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-3 h-px w-5 shrink-0 bg-dawn"
                />
                {item}
              </li>
            ))}
          </ul>
          <Button href="/contact/" variant="onDark" size="lg" className="mt-8">
            Discuss your website
            <ArrowRight />
          </Button>
        </div>

        <div aria-hidden="true" className="hidden lg:block">
          <ElevationLine
            className="h-40 w-full"
            strokeClassName="text-dawn/60"
          />
        </div>
      </div>
    </div>
  )
}
