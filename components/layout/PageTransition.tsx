'use client'

import { usePathname } from 'next/navigation'

/**
 * A short fade on every route change.
 *
 * Next's client-side routing swaps pages instantly, which reads as nothing
 * having happened when consecutive pages share a layout. A brief fade is the
 * smallest possible signal that you have moved.
 *
 * Keyed on the pathname so React remounts the subtree and restarts the
 * animation. Deliberately opacity only — no slide, no scale, nothing that
 * makes content arrive later than it has to. `prefers-reduced-motion` removes
 * it entirely, handled in globals.css.
 *
 * The header and footer sit outside this, so the chrome stays put while the
 * page changes, which reinforces the same signal.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  )
}
