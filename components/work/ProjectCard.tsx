import Image from 'next/image'
import Link from 'next/link'

import { Pill } from '@/components/ui/brand'
import { type Project, statusLabels } from '@/content/projects'

/**
 * A single project card. The status label is printed automatically from the
 * project data, so concept and self-initiated work is always identified as
 * such and can never be mistaken for paid client work.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm border border-hairline bg-paper transition-colors duration-200 hover:border-ink/30">
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-sunk">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 32rem, (min-width: 640px) 45vw, 90vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone={project.status === 'client' ? 'ember' : 'light'}>
            {statusLabels[project.status]}
          </Pill>
          <span className="eyebrow text-ink-muted">{project.projectType}</span>
        </div>

        <h3 className="mt-4 text-xl">
          {/* The whole card is clickable, but only the title is a link, so the
              accessible name stays meaningful when read out of context. */}
          <Link
            href={`/work/${project.slug}/`}
            className="transition-colors duration-200 before:absolute before:inset-0 before:content-[''] group-hover:text-ember-deep"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-ink-muted">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
          {project.services.map((service) => (
            <li key={service} className="eyebrow text-ink-muted">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
