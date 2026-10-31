import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Woodblock Process Demos | Dry Creek Art Press',
  description: 'Color layer demonstrations showing how Leon Loughridge builds woodblock prints from first impression to final image — Santo Rubio, Tewa Pot, and Showers on the Gorge.',
  alternates: { canonical: '/wbdemos' },
}

const demos = [
  {
    title: 'Santo Rubio',
    subtitle: 'Two-color reduction print',
    img: '/images/wbdemos/72263d_aa3e0c518322438c9a823af33ef50f65~mv2.jpg',
    body: 'A two-color reduction print showing each color layer separately. The image is a woodblock illustration for the Royal Road book published in 2012.',
  },
  {
    title: 'Tewa Pot',
    subtitle: 'Four-color reduction print',
    img: '/images/wbdemos/72263d_8e5b889593e04c7da25386b9646d58c1~mv2.jpg',
    body: 'A reduction print showing a progression of each of the four color layers. The image is an illustration in the Royal Road book published in 2012.',
  },
  {
    title: 'Showers on the Gorge',
    subtitle: 'Ten-color, three-block reduction woodblock',
    img: '/images/wbdemos/72263d_f6527a52e7fa41569da3fd209805029f~mv2.jpg',
    body: 'The watercolor used to create a ten-color reduction woodblock using three blocks. Image measures 7 × 9" and was created during a multiple-day workshop as a demo for the class.',
  },
]

export default function WbDemosPage() {
  return (
    <>
      <PageHero
        title="Process Demos"
        subtitle="Color layer breakdowns showing how each woodblock image is built — impression by impression."
        accent="Woodblock Demos"
      />

      <section className="dc-section" style={{ backgroundColor: '#fff', borderBottom: '1px solid var(--rule)' }}>
        <div className="page-wrap">
          <FadeUp>
            <p style={{ fontWeight: 300, fontSize: '0.92rem', lineHeight: 1.9, maxWidth: '640px', marginBottom: '3rem', color: 'var(--body-text)' }}>
              Some demos of the color layers used to create a woodblock image. Each demo shows the progression from raw impression through the final layered print — the same process repeated across every edition produced at Dry Creek Art Press.
            </p>
          </FadeUp>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {demos.map((demo, i) => (
              <FadeUp key={demo.title} delay={i * 100}>
                <div className="dc-grid-2" style={{ alignItems: 'start', gap: '3rem' }}>
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '2px', backgroundColor: 'var(--card-bg)' }}>
                    <Image
                      src={demo.img}
                      alt={`${demo.title} — woodblock process demo by Leon Loughridge`}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="artwork-img"
                    />
                  </div>
                  <div style={{ paddingTop: '0.5rem' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.4rem' }}>{demo.subtitle}</p>
                    <h2 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: 'var(--body-text)', marginBottom: '1rem' }}>{demo.title}</h2>
                    <p style={{ fontWeight: 300, fontSize: '0.92rem', lineHeight: 1.9, color: 'var(--body-text)' }}>{demo.body}</p>
                  </div>
                </div>
                {i < demos.length - 1 && <hr className="dc-rule" style={{ marginTop: '4rem' }} />}
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <FadeUp>
        <section className="dc-section" style={{ backgroundColor: 'var(--card-bg)', textAlign: 'center' }}>
          <div className="page-wrap">
            <h2 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>Learn More About The Process</h2>
            <p style={{ fontWeight: 300, fontSize: '0.92rem', lineHeight: 1.85, maxWidth: '480px', margin: '0 auto 1.75rem', color: 'var(--body-text)' }}>
              Download the technique guides or explore the full process overview — Relief Prints, Moku Hanga, Serigraph, and Intaglio.
            </p>
            <Link href="/process" style={{ display: 'inline-block', padding: '0.65rem 1.75rem', backgroundColor: 'var(--note-btn)', color: '#fff', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-avenir), sans-serif' }}>
              ← Back to Process
            </Link>
          </div>
        </section>
      </FadeUp>
    </>
  )
}
