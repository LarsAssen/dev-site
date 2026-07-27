'use client'

import { usePathname } from 'next/navigation'

import { ArrowRight, Button } from '@/components/ui/Button'
import { DashedDivider } from '@/components/ui/brand'
import { primaryCta } from '@/content/navigation'

/** Pages that already end in an enquiry form do not need this repeated. */
const SUPPRESS_ON = ['/contact/', '/freelance-support/']

export function FooterCta() {
  const pathname = usePathname()
  const normalised = pathname.endsWith('/') ? pathname : `${pathname}/`

  if (SUPPRESS_ON.includes(normalised)) return null

  return (
    <>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="accent-line" aria-hidden="true" />
          <h2 className="mt-6 max-w-[18ch] text-3xl sm:text-4xl">
            Ready for a clearer, more professional website?
          </h2>
          <p className="mt-4 measure text-mist">
            Tell me about your business, your current website and what you would
            like to improve. I will read it properly and let you know whether
            the project is a good fit.
          </p>
        </div>
        <Button
          href={primaryCta.href}
          variant="onDark"
          size="lg"
          className="shrink-0"
        >
          {primaryCta.label}
          <ArrowRight />
        </Button>
      </div>

      <DashedDivider tone="dark" className="my-14" />
    </>
  )
}
