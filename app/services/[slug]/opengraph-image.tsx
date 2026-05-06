import { ImageResponse } from 'next/og';
import { getIndustry, getAllSlugs } from '@/lib/industries';

export const alt = 'Web Design for Columbus Service Businesses';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  const name = industry?.name ?? 'Columbus Service Businesses';
  const accent = industry?.colors.glow ?? '#7c3aed';

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
            top: -250,
            right: -200,
            width: 800,
            height: 800,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${accent}AA, transparent 70%)`,
            opacity: 0.55,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -250,
            left: -150,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(124,58,237,0.45), transparent 70%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: `linear-gradient(135deg, ${accent}, #22d3ee)`,
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 28,
              color: '#a5b4fc',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              display: 'flex',
            }}
          >
            Web Design for
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              maxWidth: 1000,
              display: 'flex',
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 30,
              color: '#cbd5e1',
              letterSpacing: '-0.01em',
              display: 'flex',
            }}
          >
            Built for Columbus, Ohio. See yours before you pay.
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: accent,
                display: 'flex',
              }}
            />
            Columbus, OH
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
