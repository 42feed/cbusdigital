import { ImageResponse } from 'next/og';

export const alt = 'CBUS Digital — Columbus Web Design for Local Businesses';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#07070b',
          color: '#fff',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -200,
            left: -150,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(124,58,237,0.55), transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -250,
            right: -150,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(34,211,238,0.35), transparent 70%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #7c3aed, #22d3ee)',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            CBUS Digital
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              maxWidth: 980,
              display: 'flex',
            }}
          >
            Custom websites for Columbus service businesses.
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#a5b4fc',
              letterSpacing: '-0.01em',
              display: 'flex',
            }}
          >
            See your site before you pay anything.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#94a3b8',
          }}
        >
          <div style={{ display: 'flex' }}>cbusdigital.com</div>
          <div style={{ display: 'flex' }}>Columbus, OH</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
