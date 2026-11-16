import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroSlideshow from '@/components/HeroSlideshow'
import FadeUp from '@/components/FadeUp'
import WatercolorFader from '@/components/WatercolorFader'

export const metadata: Metadata = {
  title: 'Dry Creek Art Press — Woodblocks and Editioned Books by Leon Loughridge',
  description: 'Welcome to Dry Creek Art Press. Woodblocks and Editioned Books by Leon Loughridge. Handmade prints, serigraphs, etchings, watercolors and limited edition books from Denver, Colorado.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Leon Loughridge',
  jobTitle: 'Printmaker, Artist',
  worksFor: { '@type': 'Organization', name: 'Dry Creek Art Press' },
  url: 'https://www.dcartpress.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Denver', addressRegion: 'CO', addressCountry: 'US' },
  sameAs: ['https://www.instagram.com/dcartpress2/'],
}

const categories = [
  { label: 'Woodblocks' as const, href: '/woodblocks', desc: 'Hand printed woodblocks in small editions.', img: '/images/woodblocks/evergreens.jpg' },
  { label: 'Editioned Books', href: '/books/editioned', desc: 'A collection of hand printed and bound books in small editions.', img: '/images/books/traveling-watercolors-cover.jpg' },
  { label: 'Serigraphs', href: '/serigraphs', desc: 'Hand printed serigraphs in small editions.', img: '/images/serigraphs/summer-garden.jpg' },
  { label: 'Etchings', href: '/etchings', desc: 'Intaglio prints using various techniques.', img: '/images/etchings/grey-day.jpg' },
  { label: 'Collections', href: '/a-bit-more', desc: 'Various collections of vintage prints and originals.', img: '/images/collections/horse-racing-etching.jpg' },
  { label: 'Watercolors', href: '/watercolors', desc: 'Studio watercolor and watercolor sketches.', img: '/images/watercolors/forest-watercolor.jpg' },
]

const coorsArtwork = [
  { title: 'Gorge Nocturne', src: '/images/exhibits/gorge-nocturne.webp' },
  { title: 'Mule Deer', src: '/images/exhibits/mule-deer.webp' },
  { title: 'Steeple Repair', src: '/images/exhibits/steeple-repair.webp' },
  { title: 'Ranchos Sunset', src: '/images/exhibits/ranchos-sunset.webp' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero Slideshow ── */}
      <section style={{ borderBottom: '1px solid var(--rule)' }}>
        <HeroSlideshow />
      </section>

      {/* ── A Tradition of Devotion ── */}
      <section className="dc-section" style={{ backgroundColor: '#fff', borderBottom: '1px solid var(--rule)' }}>
        <div className="page-wrap dc-grid-2" style={{ minHeight: '420px' }}>
          {/* Text — left side */}
          <FadeUp anim="left">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}>
              <div style={{ width: '32px', height: '1px', backgroundColor: '#A26F4C', marginBottom: '1.25rem' }} />
              <h2 style={{
                fontFamily: 'var(--font-fredericka), serif',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
                lineHeight: 1.25,
                color: '#A26F4C',
                marginBottom: '1.25rem',
                letterSpacing: '0.01em',
              }}>
                A Tradition<br />of Devotion
              </h2>
              <p style={{
                fontFamily: 'var(--font-avenir), sans-serif',
                fontWeight: 300,
                fontSize: '0.95rem',
                lineHeight: 1.85,
                color: '#000',
                marginBottom: '2rem',
                maxWidth: '380px',
              }}>
                An exhibit of woodblocks and watercolors of the &ldquo;remudding&rdquo; of the San Francisco de Asis Mission at Ranchos de Taos. McLarry Fine Art, Santa Fe, NM · Oct 16, 2026 through November.
              </p>
              <Link href="/in-the-works" className="dc-btn">
                Visit Exhibit Page
              </Link>
            </div>
          </FadeUp>
          {/* Image — right side, full artwork shown, never cropped */}
          <FadeUp anim="right" delay={120}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src="/images/home-ranchos-taos.jpg"
                alt="San Francisco de Asis Mission, Ranchos de Taos — woodblock print by Leon Loughridge"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="dc-section coors-exhibit" aria-labelledby="coors-exhibit-title">
        <div className="page-wrap">
          <FadeUp>
            <h2 id="coors-exhibit-title" className="coors-exhibit-title">Coors Western Art Exhibit</h2>
            <p className="coors-exhibit-dates">
              <time dateTime="2027-01-06">January 6</time>–<time dateTime="2027-01-24">24, 2027</time>
            </p>
            <div className="coors-exhibit-grid">
              {coorsArtwork.map(({ title, src }) => (
                <figure key={src}>
                  <div className="coors-exhibit-image">
                    <Image
                      src={src}
                      alt={title + ' by Leon Loughridge'}
                      fill
                      sizes="(max-width: 600px) 45vw, (max-width: 1080px) 23vw, 235px"
                    />
                  </div>
                  <figcaption>{title}</figcaption>
                </figure>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Watercolor Sketches ── */}
      <section className="dc-section" style={{ backgroundColor: '#F7F5F5', borderBottom: '1px solid var(--rule)' }}>
        <div className="page-wrap">
          <div className="dc-grid-2">
            {/* Left: fading portrait watercolors */}
            <FadeUp anim="left">
              <WatercolorFader />
            </FadeUp>
            {/* Right: text */}
            <FadeUp anim="right" delay={120}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                <div style={{ width: '32px', height: '1px', backgroundColor: '#A26F4C', marginBottom: '1.25rem' }} />
                <h2 style={{ fontFamily: 'var(--font-fredericka), serif', color: '#A26F4C', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1rem' }}>Watercolor Sketches</h2>
                <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.85, color: '#000', marginBottom: '2rem', maxWidth: '400px' }}>
                  On-site watercolors from adventures around Colorado and New Mexico. Captured in the moment — each piece a quick study of light, landscape, and place. Most are loose sheets without frame or matting.
                </p>
                <Link href="/watercolors" className="dc-btn">
                  Visit The Page
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Quote — flip card on hover ── */}
      <section className="dc-section" style={{ backgroundColor: '#F0EEE2', borderBottom: '1px solid var(--rule)', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <style>{`
          .quote-flip-wrap {
            perspective: 1200px;
            max-width: 760px;
            margin: 0 auto;
            height: 420px;
            cursor: pointer;
          }
          .quote-flip-card {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .quote-flip-wrap:hover .quote-flip-card {
            transform: rotateY(180deg);
          }
          .quote-front, .quote-back {
            position: absolute;
            inset: 0;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .quote-back {
            transform: rotateY(180deg);
            overflow: hidden;
          }
        `}</style>

        <FadeUp anim="scale">
          <div className="quote-flip-wrap">
            <div className="quote-flip-card">
              {/* Front — quote text */}
              <div className="quote-front" style={{ flexDirection: 'column', textAlign: 'center', padding: '0 2rem' }}>
                <div style={{
                  fontFamily: 'var(--font-fredericka), serif',
                  fontSize: 'clamp(4rem, 8vw, 7rem)',
                  color: '#A26F4C',
                  lineHeight: 1,
                  marginBottom: '-1rem',
                  opacity: 0.35,
                  userSelect: 'none',
                }}>&ldquo;</div>
                <p style={{
                  fontFamily: 'var(--font-fredericka), serif',
                  fontSize: 'clamp(1.1rem, 2vw, 1.55rem)',
                  lineHeight: 1.65,
                  color: '#2a1f14',
                  letterSpacing: '0.01em',
                }}>
                  Art has been a part of my life since I can remember. It is how I see what is around me.
                  The world makes sense when I can record what I feel and see with sketches and drawings.
                  My woodblocks are a more complete story of the moment.
                </p>
                <p style={{ marginTop: '1.25rem', fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A26F4C' }}>
                  — Leon Loughridge &nbsp;·&nbsp; hover to meet him
                </p>
              </div>

              {/* Back — Leon's photo */}
              <div className="quote-back" style={{ backgroundColor: '#F0EEE2' }}>
                <Image
                  src="/images/about/leon-with-print.jpg"
                  alt="Leon Loughridge in his studio holding a woodblock print"
                  fill
                  sizes="760px"
                  style={{ objectFit: 'contain', objectPosition: 'top center' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  padding: '1.25rem 1.5rem',
                  background: 'linear-gradient(to top, rgba(20,13,7,0.75), transparent)',
                  color: '#F0EEE2',
                  fontFamily: 'var(--font-avenir), sans-serif',
                  fontWeight: 300,
                  fontSize: '0.8rem',
                  letterSpacing: '0.06em',
                }}>
                  Leon Loughridge — Dry Creek Art Press, Denver
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Category Grid ── */}
      <section className="dc-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="page-wrap">
          <div className="art-grid">
            {categories.map((cat, i) => (
              <FadeUp key={cat.href} delay={i * 100}>
                <Link href={cat.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="cat-grid-card">
                    <div style={{ position: 'relative', width: '100%', paddingBottom: '82%', backgroundColor: '#e8e4dc', marginBottom: '1rem', overflow: 'hidden', flexShrink: 0 }}>
                      <Image
                        src={cat.img}
                        alt={cat.label}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '1.05rem', color: 'var(--body-text)', marginBottom: '0.4rem' }}>{cat.label}</h3>
                    <p style={{ fontSize: '0.8rem', color: '#777', fontStyle: 'italic', marginBottom: '0.75rem' }}>{cat.desc}</p>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent)', textDecoration: 'underline' }}>Visit Page</span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
