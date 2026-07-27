import type { Metadata, Viewport } from 'next'
import { DM_Mono, DM_Sans, Playfair_Display } from 'next/font/google'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SkipLink } from '@/components/layout/SkipLink'
import { site } from '@/content/site'
import { personSchema, websiteSchema } from '@/lib/schema'

import './globals.css'

/* Fonts are downloaded at build time and served from our own domain. No
   request goes to Google at runtime, and the fallback metrics below prevent
   layout shift while the font loads. */

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-dm-mono',
})

export const viewport: Viewport = {
  themeColor: '#1b2d42',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Websites for service businesses`,
    template: `%s — ${site.name}`,
  },
  description:
    'I design and build clear, modern websites for small service businesses and independent professionals in New Zealand and further afield.',
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    siteName: site.name,
    url: site.url,
    title: `${site.name} — Websites for service businesses`,
    description:
      'Clear, modern websites for service businesses that need to look professional and make it easier for customers to get in touch.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Websites for service businesses`,
    description:
      'Clear, modern websites for service businesses that need to look professional and make it easier for customers to get in touch.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-NZ"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper text-ink">
        <SkipLink />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        {/* Sitewide structured data. Page-specific schema is added per page. */}
        <script
          type="application/ld+json"
          // Content is generated from our own config, never from user input.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteSchema(), personSchema()]),
          }}
        />
      </body>
    </html>
  )
}
