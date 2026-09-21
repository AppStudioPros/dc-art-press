import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroSlideshow from '@/components/HeroSlideshow'
import QuestMarquee from '@/components/QuestMarquee'
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
  { label: 'Woodblocks', href: '/woodblocks', desc: 'Hand printed woodblocks in small editions.' },
  { label: 'Editioned Books', href: '/books/editioned', desc: 'A collection of hand printed and bound books in small editions.' },
  { label: 'Serigraphs', href: '/serigraphs', desc: 'Hand printed serigraphs in small editions.' },
  { label: 'Etchings', href: '/etchings', desc: 'Intaglio prints using various techniques.' },
  { label: 'Collections', href: '/a-bit-more', desc: 'Various collections of vintage prints and originals.' },
  { label: 'Watercolors', href: '/watercolors', desc: 'Studio watercolor and watercolor sketches.' },
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
      <section style={{ backgroundColor: '#fff', padding: '5rem 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="page-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', minHeight: '420px' }}>
        {/* Text — left side, gallery label style */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
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
            Scheduled for late October 2026 — an exhibit of woodblocks and watercolors of the &ldquo;remudding&rdquo; of the San Francisco de Asis Mission at Ranchos de Taos. McLarry Fine Art, Santa Fe, NM · Oct 16, 2026.
          </p>
          <Link href="/in-the-works" style={{
            display: 'inline-block',
            alignSelf: 'flex-start',
            padding: '0.6rem 1.6rem',
            backgroundColor: 'var(--note-btn)',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.78rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Visit Exhibit Page
          </Link>
        </div>
        {/* Image — right side, full artwork shown, never cropped */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            src="/images/home-ranchos-taos.jpg"
            alt="San Francisco de Asis Mission, Ranchos de Taos — woodblock print by Leon Loughridge"
            width={600}
            height={450}
            sizes="50vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        </div>
      </section>

      {/* ── Quest for the West ── */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--rule)', backgroundColor: '#F7F5F5' }}>
        <div className="page-wrap" style={{ marginBottom: '2.5rem' }}>
          <div style={{ width: '32px', height: '1px', backgroundColor: '#A26F4C', marginBottom: '1rem' }} />
          <h2 style={{ fontFamily: 'var(--font-fredericka), serif', color: '#A26F4C', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '0.4rem' }}>Quest for the West</h2>
          <p style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '0.88rem', color: '#A26F4C', marginBottom: '0.9rem', opacity: 0.75 }}>The Eiteljorg Museum, Indianapolis</p>
          <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '560px', color: '#000' }}>
            I am very honored to have been invited to exhibit my woodblocks at the Eiteljorg Museum in Indianapolis.
            Four woodblocks on display: Ranchos Sunset, Acoma Pueblo, Snowy Plateau and Freezing Over.
          </p>
        </div>
        <QuestMarquee />
      </section>

      {/* ── Watercolor Sketches ── */}
      <section style={{ backgroundColor: '#F7F5F5', padding: '5rem 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="page-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Left: fading portrait watercolors */}
            <WatercolorFader />
            {/* Right: text */}
            <div>
              <div style={{ width: '32px', height: '1px', backgroundColor: '#A26F4C', marginBottom: '1.25rem' }} />
              <h2 style={{ fontFamily: 'var(--font-fredericka), serif', color: '#A26F4C', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1rem' }}>Watercolor Sketches</h2>
              <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.85, color: '#000', marginBottom: '2rem', maxWidth: '400px' }}>
                On-site watercolors from adventures around Colorado and New Mexico. Captured in the moment — each piece a quick study of light, landscape, and place. Most are loose sheets without frame or matting.
              </p>
              <Link href="/watercolors" style={{ display: 'inline-block', padding: '0.6rem 1.6rem', backgroundColor: 'var(--note-btn)', color: '#fff', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Visit The Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section style={{ backgroundColor: '#F0EEE2', padding: '5rem 2rem', borderBottom: '1px solid var(--rule)', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
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
            fontSize: 'clamp(1.2rem, 2.4vw, 1.75rem)',
            lineHeight: 1.65,
            color: '#2a1f14',
            letterSpacing: '0.01em',
          }}>
            Art has been a part of my life since I can remember. It is how I see what is around me.
            The world makes sense when I can record what I feel and see with sketches and drawings.
            My woodblocks are a more complete story of the moment.
          </p>
          <p style={{ marginTop: '1.5rem', fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A26F4C' }}>
            — Leon Loughridge
          </p>
        </div>
      </section>

      {/* ── Modern Bungalow ── */}
      <section style={{ backgroundColor: '#4E574B', borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '360px' }}>
          {/* Logo card */}
          <div style={{ backgroundColor: '#F0EEE2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem' }}>
            <Image
              src="/images/modern-bungalow-logo.jpg"
              alt="Modern Bungalow — Denver Colorado"
              width={280}
              height={240}
              style={{ width: 'auto', maxWidth: '260px', height: 'auto', display: 'block' }}
            />
          </div>
          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3.5rem 4rem' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: '#A26F4C', marginBottom: '1.25rem' }} />
            <h2 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: 'clamp(1.4rem, 2.2vw, 2rem)', color: '#F0EEE2', marginBottom: '1rem' }}>Modern Bungalow</h2>
            <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.92rem', lineHeight: 1.85, color: 'rgba(240,238,226,0.82)', marginBottom: '1.5rem' }}>
              My woodblocks are now on display at Modern Bungalow on South Gaylord — a lovely historic building with parking right behind the shop at the painted doorway in the alley.
            </p>
            <div style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.85rem', color: 'rgba(240,238,226,0.65)', lineHeight: 2 }}>
              1028 S. Gaylord Street, Denver CO 80209<br />
              Mon–Sat 10AM–5PM &nbsp;·&nbsp; Sun 10AM–2PM<br />
              <a href="tel:3033003332" style={{ color: '#A26F4C', textDecoration: 'none' }}>303-300-3332</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Grid ── */}
      <section style={{ padding: '3rem 0' }}>
        <div className="page-wrap">
          <div className="art-grid">
            {categories.map(cat => (
              <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ border: '1px solid var(--border)', padding: '1.5rem', textAlign: 'center', backgroundColor: 'var(--white)', cursor: 'pointer' }}
                  className="hover:shadow-sm transition-shadow">
                  <div className="img-placeholder" style={{ height: '160px', marginBottom: '1rem' }}>
                    [ {cat.label} ]
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '1rem', color: 'var(--body-text)', marginBottom: '0.5rem' }}>{cat.label}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#777', fontStyle: 'italic' }}>{cat.desc}</p>
                  <p style={{ marginTop: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent)', textDecoration: 'underline' }}>Visit Page</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
