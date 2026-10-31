import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'About The Process | Dry Creek Art Press',
  description: 'How Leon Loughridge makes prints — from carving the woodblock to pulling the final impression. An inside look at Moku Hanga, relief printing, serigraph, and intaglio at Dry Creek Art Press.',
  alternates: { canonical: '/process' },
}

const techniques = [
  {
    title: 'Relief Prints',
    subtitle: 'Woodblock · Linocut · Reduction',
    img: '/images/process/72263d_bf508c20da074735960a0c7b4c118d3a~mv2.jpg',
    body: `Relief printing is one of the oldest forms of printmaking. The image is carved by hand into a wood or linoleum block — the raised surface accepts the ink, while the cut-away areas stay white. Each color requires a separate pass through the press or a separate hand-printing step.\n\nLeon's reduction prints remove material from a single block between each color, making each edition inherently unique and irreproducible once the block is fully reduced.`,
  },
  {
    title: 'Moku Hanga',
    subtitle: 'Japanese Woodblock Printing',
    img: null,
    body: `Moku Hanga is the traditional Japanese method of woodblock printing, using water-based inks made from rice paste and pigment. Unlike oil-based relief printing, the ink is brushed across the carved surface and transferred to dampened paper with a baren — a smooth, round pressing tool — by hand.\n\nThe dampness of the paper, the pressure of the baren, and the viscosity of the ink all interact to produce a characteristic softness and luminosity that can't be replicated by any mechanical press.`,
  },
  {
    title: 'Serigraph Prints',
    subtitle: 'Silkscreen · Hand-pulled',
    img: null,
    body: `Serigraph printing — also called silkscreen — uses a fine mesh screen stretched over a frame. A stencil blocks areas that should remain unprinted; ink is pushed through the open mesh onto the paper with a squeegee, one color at a time.\n\nLeon's serigraphs are produced at ArtGymDenver. Each color is mixed, printed, and dried before the next layer is applied, building up rich, layered color across the edition.`,
  },
  {
    title: 'Intaglio Prints',
    subtitle: 'Etching · Engraving',
    img: null,
    body: `Intaglio is the inverse of relief printing. Lines and textures are incised directly into a metal plate — either cut by hand (engraving) or bitten by acid (etching). Ink is forced into the recessed lines, the surface wiped clean, and dampened paper is pressed onto the plate under significant pressure, pulling the ink from the grooves.\n\nThe characteristic richness of an intaglio print — the plate impression visible in the paper, the dense velvety ink — comes directly from this physical contact between paper, ink, and metal.`,
  },
]

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="About The Process"
        subtitle="From carved block to pulled impression — how the prints are made."
        accent="Studio Process"
      />

      {/* Intro */}
      <section className="dc-section" style={{ backgroundColor: '#fff', borderBottom: '1px solid var(--rule)' }}>
        <div className="page-wrap">
          <FadeUp>
            <div className="dc-grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1rem', lineHeight: 1.25 }}>
                  Every print begins<br />with a hand and a block.
                </h2>
                <p style={{ fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--body-text)', marginBottom: '1rem' }}>
                  At Dry Creek Art Press, every print is made by hand. Leon Loughridge works primarily in woodblock — carving the image into wood, inking by brush, and pressing to dampened paper one color at a time. Each edition is small. Each print carries the mark of the hand that made it.
                </p>
                <p style={{ fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--body-text)' }}>
                  The techniques vary — Moku Hanga, reduction relief, serigraph, intaglio — but the principle is consistent: direct contact between artist, material, and paper.
                </p>
              </div>
              <div style={{ position: 'relative', height: '380px', borderRadius: '2px', overflow: 'hidden' }}>
                <Image
                  src="/images/process/72263d_bf508c20da074735960a0c7b4c118d3a~mv2.jpg"
                  alt="Leon Loughridge's printmaking workspace with carved woodblock and inks"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="artwork-img"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Techniques */}
      <section className="dc-section" style={{ backgroundColor: 'var(--card-bg)', borderBottom: '1px solid var(--rule)' }}>
        <div className="page-wrap">
          <FadeUp>
            <h2 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--body-text)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginBottom: '0.4rem' }}>The Techniques</h2>
            <p style={{ fontWeight: 300, fontSize: '0.88rem', color: '#888', marginBottom: '3rem', letterSpacing: '0.04em' }}>Four printmaking disciplines — each with its own process, tools, and character.</p>
          </FadeUp>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {techniques.map((t, i) => (
              <FadeUp key={t.title} delay={i * 100}>
                <div style={{ display: 'grid', gridTemplateColumns: t.img ? '1fr 1fr' : '1fr', gap: '3rem', alignItems: 'start', padding: '2.5rem', backgroundColor: '#fff', border: '1px solid var(--border)' }}>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.4rem' }}>{t.subtitle}</p>
                    <h3 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '1.5rem', color: 'var(--body-text)', marginBottom: '1.25rem' }}>{t.title}</h3>
                    {t.body.split('\n\n').map((para, j) => (
                      <p key={j} style={{ fontWeight: 300, fontSize: '0.92rem', lineHeight: 1.9, color: 'var(--body-text)', marginBottom: '1rem' }}>{para}</p>
                    ))}
                  </div>
                  {t.img && (
                    <div style={{ position: 'relative', height: '300px', overflow: 'hidden', borderRadius: '2px' }}>
                      <Image src={t.img} alt={t.title} fill style={{ objectFit: 'cover' }} className="artwork-img" />
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Blog CTA */}
      <FadeUp>
        <section className="dc-section" style={{ backgroundColor: '#fff', textAlign: 'center' }}>
          <div className="page-wrap">
            <h2 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginBottom: '0.75rem' }}>Follow the Studio Blog</h2>
            <p style={{ fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.85, maxWidth: '520px', margin: '0 auto 2rem', color: 'var(--body-text)' }}>
              The Studio Blog documents current projects, process steps, material experiments, and studio life at Dry Creek Art Press.
            </p>
            <Link href="/blog" style={{ display: 'inline-block', padding: '0.7rem 2rem', backgroundColor: 'var(--note-btn)', color: '#fff', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 500 }}>
              View Studio Blog →
            </Link>
          </div>
        </section>
      </FadeUp>
    </>
  )
}
