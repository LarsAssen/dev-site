import type { MetadataRoute } from 'next'

import { site } from '@/content/site'

// Required by `output: 'export'` — tells Next this route is generated once
// at build time and written to a static file.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/privacy/'],
    },
    sitemap: new URL('/sitemap.xml', site.url).toString(),
  }
}
