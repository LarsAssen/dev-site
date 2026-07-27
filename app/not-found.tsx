import type { Metadata } from 'next'

import { ArrowRight, Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { AccentLine, Eyebrow } from '@/components/ui/brand'
import { primaryNav } from '@/content/navigation'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <Section tone="midnight" size="lg">
      <div className="max-w-2xl">
        <AccentLine />
        <Eyebrow tone="dark" className="mt-5 block">
          Error 404
        </Eyebrow>
        <h1 className="mt-6 text-4xl sm:text-5xl">
          That page is not here.
        </h1>
        <p className="mt-6 measure text-lg text-mist">
          The link may be out of date, or the address may have a typo in it.
          Everything on the site is one click away below.
        </p>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-linen underline decoration-linen/35 underline-offset-4 transition-colors duration-200 hover:decoration-dawn"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="/" variant="onDark" size="lg" className="mt-10">
          Back to the homepage
          <ArrowRight />
        </Button>
      </div>
    </Section>
  )
}
