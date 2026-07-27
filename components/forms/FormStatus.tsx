'use client'

import { useEffect, useRef } from 'react'

import { AccentLine } from '@/components/ui/brand'
import { isPlaceholder, site } from '@/content/site'

import type { FormState } from './useEnquiryForm'

/**
 * The confirmation shown after a successful submission. It sets expectations
 * about what happens next rather than just saying "thanks".
 */
export function SuccessMessage({
  heading,
  body,
}: {
  heading: string
  body: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  // The form is replaced by this message, so move focus here. Without it,
  // focus falls back to the document and keyboard and screen reader users are
  // given no indication that anything happened.
  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <div
      ref={ref}
      role="status"
      tabIndex={-1}
      className="rounded-sm border border-canopy/30 bg-canopy/[0.06] p-8 sm:p-10"
    >
      <AccentLine />
      <h2 className="mt-6 text-2xl">{heading}</h2>
      <p className="mt-4 measure text-ink-muted">{body}</p>
      <p className="mt-4 measure text-ink-muted">
        If you do not hear back within a few working days, the message may not
        have reached me — please follow up
        {isPlaceholder(site.email) ? (
          <> at {site.email}.</>
        ) : (
          <>
            {' '}
            at{' '}
            <a
              href={`mailto:${site.email}`}
              className="text-ember-deep underline underline-offset-4"
            >
              {site.email}
            </a>
            .
          </>
        )}
      </p>
    </div>
  )
}

/** Inline error and not-yet-connected states, announced to screen readers. */
export function FormNotice({
  state,
  statusRef,
}: {
  state: FormState
  statusRef: React.RefObject<HTMLDivElement | null>
}) {
  const isVisible =
    state.status === 'error' || state.status === 'unconfigured'

  // Focus has to wait until after the notice has actually rendered, which is
  // why it happens here rather than in the submit handler.
  useEffect(() => {
    if (isVisible) statusRef.current?.focus()
  }, [isVisible, statusRef])

  if (!isVisible) return null

  const isUnconfigured = state.status === 'unconfigured'

  return (
    <div
      ref={statusRef}
      role="alert"
      tabIndex={-1}
      className="rounded-sm border border-ember/40 bg-ember/[0.06] p-5"
    >
      <p className="text-sm font-medium text-ember-deep">
        {isUnconfigured
          ? 'This form is not connected yet'
          : 'That did not send'}
      </p>
      <p className="mt-2 measure text-sm text-ink-muted">
        {isUnconfigured ? (
          <>
            The enquiry form is ready but has not been linked to a form service
            yet. In the meantime, please send your message to{' '}
            <strong className="font-medium text-ink">{site.email}</strong> and
            it will be picked up.
          </>
        ) : (
          state.message
        )}
      </p>
    </div>
  )
}
