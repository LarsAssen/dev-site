import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CaseStudy } from '@/components/work/CaseStudy'
import { getProject, projects, statusLabels } from '@/content/projects'
import { breadcrumbSchema } from '@/lib/schema'

/* ==========================================================================
   CASE-STUDY PAGE — currently inactive
   ---------------------------------------------------------------------------
   This file is finished and ready to use. It sits in a folder beginning with
   an underscore, which Next treats as private and does not turn into a route.

   TO ACTIVATE IT, once you have added your first project to
   content/projects.ts:

       rename  app/work/_case-study-template/
           to  app/work/[slug]/

   That is the only change needed. Every project in the array then gets its own
   page at /work/<slug>/, and the cards on the Work page start linking to them.

   Why it is parked: a static export cannot build a dynamic route that produces
   zero pages, and there are no projects yet. Activating it before you have a
   project will fail the build with "missing generateStaticParams()".
   ========================================================================== */

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

/** No fallback rendering: only the slugs listed above exist. */
export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) return { title: 'Project not found' }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}/` },
    openGraph: {
      type: 'article',
      title: `${project.title} — ${statusLabels[project.status]}`,
      description: project.summary,
      url: `/work/${project.slug}/`,
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  return (
    <>
      <CaseStudy project={project} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Work', href: '/work/' },
              { name: project.title, href: `/work/${project.slug}/` },
            ]),
          ),
        }}
      />
    </>
  )
}
