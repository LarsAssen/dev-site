import type { MetadataRoute } from 'next'

import { projects } from '@/content/projects'
import { site } from '@/content/site'

// Required by `output: 'export'` — tells Next this route is generated once
// at build time and written to a static file.
export const dynamic = 'force-static'

/* Generated at build time. New case studies added to content/projects.ts are
   included automatically — nothing here needs updating by hand. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const pages: Array<{ path: string; priority: number }> = [
    { path: '/', priority: 1 },
    { path: '/website-builds/', priority: 0.9 },
    { path: '/work/', priority: 0.7 },
    { path: '/about/', priority: 0.6 },
    { path: '/contact/', priority: 0.8 },
    { path: '/freelance-support/', priority: 0.4 },
  ]

  return [
    ...pages.map((page) => ({
      url: new URL(page.path, site.url).toString(),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: page.priority,
    })),
    ...projects.map((project) => ({
      url: new URL(`/work/${project.slug}/`, site.url).toString(),
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
