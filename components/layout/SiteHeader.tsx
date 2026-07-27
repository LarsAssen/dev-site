'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { DashedDivider } from '@/components/ui/brand'
import { primaryCta, primaryNav, secondaryNav } from '@/content/navigation'

import { Wordmark } from './Wordmark'

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Escape closes the menu and returns focus to the button that opened it.
  useEffect(() => {
    if (!isOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  function isCurrent(href: string) {
    return pathname === href || pathname === href.replace(/\/$/, '')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/92 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Wordmark />

        {/* Desktop navigation. Freelance support is intentionally absent here —
            it lives in the footer, the mobile menu and a homepage section, so
            complete website builds keep sole ownership of the nav. */}
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? 'page' : undefined}
              className={`relative py-1 text-sm transition-colors duration-200 ${
                isCurrent(item.href)
                  ? 'text-ink'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {item.label}
              {isCurrent(item.href) ? (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-ember"
                />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={primaryCta.href} className="hidden sm:inline-flex">
            {primaryCta.label}
          </Button>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-ink/20 text-ink transition-colors duration-200 hover:border-ink/50 lg:hidden"
          >
            <span className="sr-only">
              {isOpen ? 'Close menu' : 'Open menu'}
            </span>
            {isOpen ? <CloseGlyph /> : <MenuGlyph />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!isOpen}
        className="border-t border-hairline bg-paper lg:hidden"
      >
        <nav
          aria-label="Mobile"
          className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8"
        >
          <ul className="space-y-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  className={`block rounded-sm py-3 text-lg transition-colors duration-200 ${
                    isCurrent(item.href)
                      ? 'text-ember-deep'
                      : 'text-ink hover:text-ember-deep'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Secondary audience, clearly separated and labelled. */}
          <DashedDivider className="my-5" />
          <p className="eyebrow text-ink-muted">For agencies &amp; teams</p>
          <ul className="mt-2">
            {secondaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  className="block rounded-sm py-2 text-base text-ink-muted transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            href={primaryCta.href}
            size="lg"
            className="mt-6 w-full sm:hidden"
          >
            {primaryCta.label}
          </Button>
        </nav>
      </div>
    </header>
  )
}

function MenuGlyph() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseGlyph() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
