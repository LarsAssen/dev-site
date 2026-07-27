import { ImageResponse } from 'next/og'

// Required by `output: 'export'` — tells Next this route is generated once
// at build time and written to a static file.
export const dynamic = 'force-static'

/* The default social-sharing card, generated at build time. Individual pages
   inherit this unless they define their own image. */

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt =
  'Lars Assen — clear, modern websites for service businesses'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#1B2D42',
          padding: '72px 80px',
          fontFamily: 'serif',
        }}
      >
        {/* Ember accent line — the brand's key element */}
        <div
          style={{ display: 'flex', width: 96, height: 5, background: '#B85C2C' }}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 68,
              color: '#E6DDD0',
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              maxWidth: 900,
            }}
          >
            Clear, modern websites for service businesses.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: '#ADB4BE',
              fontFamily: 'sans-serif',
              maxWidth: 820,
            }}
          >
            Website design and development for small service businesses and
            independent professionals.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 30, color: '#E6DDD0' }}>lars assen</div>
          <div
            style={{
              fontSize: 20,
              color: '#D89468',
              fontFamily: 'monospace',
              letterSpacing: '0.14em',
            }}
          >
            WELLINGTON REGION · NEW ZEALAND
          </div>
        </div>
      </div>
    ),
    size,
  )
}
