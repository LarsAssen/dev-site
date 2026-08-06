/* ==========================================================================
   ENQUIRY EMAIL FUNCTION
   ---------------------------------------------------------------------------
   Both enquiry forms POST here. The function sends the submission on as an
   email with the headers set explicitly:

     To:       enquiries inbox (ENQUIRY_TO)
     From:     Website Enquiry <ENQUIRY_FROM>
     Reply-To: the visitor's own address, so hitting reply in the inbox
               answers the person who filled the form

   Netlify Forms' built-in notifications cannot set From or Reply-To, which is
   why this exists rather than the simpler `formEndpoint = '/'` route.

   Sending goes through Resend. Swapping provider means changing `sendEmail()`
   below and one environment variable — nothing else in the project knows which
   service is used.

   ENVIRONMENT VARIABLES (set in Netlify → Site configuration → Environment)
     RESEND_API_KEY  required. Without it the function returns 503 and the form
                     shows its "email me directly" fallback rather than
                     pretending the message was sent.
     ENQUIRY_TO      optional, defaults to websites@lars-assen.com
     ENQUIRY_FROM    optional, defaults to websites@lars-assen.com. Must be on
                     a domain verified in Resend or delivery will fail.
   ========================================================================== */

/* The two shapes this function needs from the Netlify runtime, declared here
   rather than pulled from @netlify/functions. That package brings in over 400
   transitive dependencies, and this file uses exactly two type aliases from
   it — the runtime supplies the real objects either way. */
type HandlerEvent = {
  httpMethod: string
  body: string | null
  isBase64Encoded: boolean
  headers: Record<string, string | undefined>
}

type HandlerResponse = {
  statusCode: number
  headers?: Record<string, string>
  body: string
}

type Handler = (event: HandlerEvent) => Promise<HandlerResponse>

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

const TO_ADDRESS = process.env.ENQUIRY_TO ?? 'websites@lars-assen.com'
const FROM_ADDRESS = process.env.ENQUIRY_FROM ?? 'websites@lars-assen.com'
const FROM_NAME = 'Website Enquiry'

/** Guards against a runaway or malicious payload. Generous for a text form. */
const MAX_BODY_BYTES = 64 * 1024
const MAX_FIELD_LENGTH = 5000

/** Permissive on purpose — strict email regexes reject valid addresses. This
 *  only has to be good enough to keep junk out of a mail header. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Fields the visitor never sees, kept out of the email body. */
const INTERNAL_FIELDS = new Set(['_gotcha', '_subject', 'form-name'])

/** Readable labels for both forms. Anything unlisted falls back to a
 *  prettified version of the field name, so a new field still reads sensibly
 *  without needing an edit here. */
const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  business: 'Business',
  company: 'Company',
  email: 'Email',
  currentSite: 'Current website',
  projectType: 'Project type',
  offering: 'What the business offers',
  goals: 'What the website should accomplish',
  summary: 'Project summary',
  reference: 'Reference link',
  startDate: 'Required start date',
  duration: 'Approximate duration',
  weeklyHours: 'Expected weekly hours',
  timeframe: 'Desired timeframe',
  budget: 'Approximate budget',
  details: 'Anything else',
}

function labelFor(field: string): string {
  if (FIELD_LABELS[field]) return FIELD_LABELS[field]
  const spaced = field.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[_-]+/g, ' ')
  return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

/** Strips CR/LF so a submitted value can never inject an extra mail header. */
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim()
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

type Submission = { fields: Array<[string, string]>; get: (k: string) => string }

function parseSubmission(event: HandlerEvent): Submission | null {
  const raw = event.isBase64Encoded
    ? Buffer.from(event.body ?? '', 'base64').toString('utf8')
    : (event.body ?? '')

  if (raw.length === 0 || Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
    return null
  }

  const params = new URLSearchParams(raw)
  const fields: Array<[string, string]> = []

  for (const [key, value] of params.entries()) {
    const trimmed = value.trim()
    if (trimmed === '') continue
    fields.push([key, trimmed.slice(0, MAX_FIELD_LENGTH)])
  }

  return {
    fields,
    get: (k) => fields.find(([key]) => key === k)?.[1] ?? '',
  }
}

function buildBodies(submission: Submission) {
  const visible = submission.fields.filter(([key]) => !INTERNAL_FIELDS.has(key))

  const text = visible
    .map(([key, value]) => `${labelFor(key)}\n${value}`)
    .join('\n\n')

  const html = visible
    .map(
      ([key, value]) =>
        `<tr>` +
        `<td style="padding:6px 16px 6px 0;vertical-align:top;color:#5b6675;` +
        `font:500 12px/1.5 -apple-system,Segoe UI,sans-serif;` +
        `text-transform:uppercase;letter-spacing:.08em;white-space:nowrap">` +
        `${escapeHtml(labelFor(key))}</td>` +
        `<td style="padding:6px 0;vertical-align:top;color:#1b2d42;` +
        `font:400 15px/1.6 -apple-system,Segoe UI,sans-serif">` +
        `${escapeHtml(value).replace(/\n/g, '<br>')}</td>` +
        `</tr>`,
    )
    .join('')

  return {
    text,
    html:
      `<table style="border-collapse:collapse;max-width:640px">${html}</table>`,
  }
}

async function sendEmail(payload: {
  from: string
  to: string
  replyTo?: string
  subject: string
  text: string
  html: string
}): Promise<{ ok: true } | { ok: false; status: number; detail: string }> {
  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: payload.from,
      to: [payload.to],
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
      // Resend's field name. Omitted entirely when the visitor's address did
      // not validate, rather than sent as an empty string.
      ...(payload.replyTo ? { reply_to: payload.replyTo } : {}),
    }),
  })

  if (response.ok) return { ok: true }
  return { ok: false, status: response.status, detail: await response.text() }
}

export const handler: Handler = async (event) => {
  const json = (statusCode: number, body: Record<string, unknown>) => ({
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' })
  }

  const submission = parseSubmission(event)
  if (!submission || submission.fields.length === 0) {
    return json(400, { error: 'Empty or malformed submission' })
  }

  // Honeypot. The client already handles this, but a bot posting straight to
  // the function bypasses the client entirely. Return 200 so it learns nothing.
  if (submission.get('_gotcha')) {
    return json(200, { ok: true })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set — enquiry not sent:', submission.fields)
    return json(503, { error: 'Email is not configured' })
  }

  const visitorEmail = singleLine(submission.get('email'))
  const replyTo = EMAIL_PATTERN.test(visitorEmail) ? visitorEmail : undefined

  const who =
    singleLine(submission.get('business')) ||
    singleLine(submission.get('company')) ||
    singleLine(submission.get('name')) ||
    'Website'

  const subject = singleLine(
    `${submission.get('_subject') || 'Website enquiry'} — ${who}`,
  ).slice(0, 200)

  const { text, html } = buildBodies(submission)

  try {
    const result = await sendEmail({
      from: `${FROM_NAME} <${FROM_ADDRESS}>`,
      to: TO_ADDRESS,
      replyTo,
      subject,
      text,
      html,
    })

    if (!result.ok) {
      // Logged in full so a failed send can still be recovered and answered
      // from the Netlify function log rather than being lost silently.
      console.error(
        `Resend rejected the enquiry (${result.status}): ${result.detail}`,
        submission.fields,
      )
      return json(502, { error: 'Email could not be sent' })
    }

    return json(200, { ok: true })
  } catch (error) {
    console.error('Enquiry send threw:', error, submission.fields)
    return json(502, { error: 'Email could not be sent' })
  }
}
