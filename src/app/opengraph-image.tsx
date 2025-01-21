import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Another SEO Guru - Expert SEO Services'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #1e40af, #3b82f6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <img
            src="https://www.anotherseoguru.com/logo.svg"
            alt="Logo"
            width={200}
            height={50}
            style={{ marginRight: '20px' }}
          />
        </div>
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          Dominate Search & Grow Your Business
        </h1>
        <p
          style={{
            fontSize: '32px',
            color: '#e2e8f0',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Expert SEO Services to Boost Your Rankings
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
