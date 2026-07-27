/** Visible only on keyboard focus. Lets keyboard and screen-reader users jump
 *  past the navigation straight to the page content. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-midnight focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-linen"
    >
      Skip to content
    </a>
  )
}
