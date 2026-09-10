import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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

      {/* ── Hero Split ── */}
      <section style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="page-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '420px' }} className="max-sm:grid-cols-1">
            {/* Left — Passion statement */}
            <div style={{ borderRight: '1px solid var(--rule)', padding: '3rem 2rem 3rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="max-sm:border-r-0 max-sm:border-b max-sm:pb-8">
              <Image src="/images/home-hero-woodblock.jpg" alt="Winter landscape woodblock print by Leon Loughridge" width={480} height={220} className="w-full object-cover mb-6" />
              <h2 style={{ fontFamily: 'var(--font-avenir), sans-serif', color: 'var(--accent)', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
                A Passion For Woodblocks
              </h2>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                Art has been a part of my life since I can remember. It is how I see what is around me.
              </p>
            </div>

            {/* Right — Welcome */}
            <div style={{ padding: '3rem 0 3rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="max-sm:pl-0 max-sm:pt-8">
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>Welcome to</p>
              <h1 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '2.2rem', color: 'var(--body-text)', lineHeight: 1.2, marginBottom: '1rem' }}>
                Dry Creek Art Press
              </h1>
              <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontSize: '1.1rem', color: 'var(--body-text)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                Woodblocks and<br />Editioned Books<br />By Leon Loughridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── A Tradition of Devotion ── */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="page-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} >
          <div>
            <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.8rem', marginBottom: '1rem' }}>
              A Tradition<br />Of Devotion
            </h2>
            <p>
              Scheduled for late October 2026 will be an exhibit of woodblocks and watercolors of the
              &ldquo;remudding&rdquo; of the San Francisco de Asis Mission at Ranchos de Taos.
              The exhibit will be at McLarry Fine Art in Santa Fe, NM on Oct 16, 2026.
            </p>
            <Link href="/in-the-works" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1.5rem', backgroundColor: 'var(--note-btn)', color: '#fff', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Visit Exhibit Page
            </Link>
          </div>
          <Image src="/images/home-ranchos-taos.jpg" alt="San Francisco de Asis Mission, Ranchos de Taos — woodblock print by Leon Loughridge" width={540} height={300} className="w-full object-contain" />
        </div>
      </section>

      {/* ── Quest for the West ── */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="page-wrap">
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, color: 'var(--accent)', fontSize: '1.6rem', marginBottom: '0.25rem' }}>Quest for the West</h2>
            <p style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.75rem' }}>The Eiteljorg Museum</p>
            <p style={{ fontSize: '0.9rem', maxWidth: '600px' }}>
              I am very honored to have been invited to exhibit my woodblocks at the Eiteljorg Museum in Indianapolis.
              I have four woodblocks on display: Ranchos Sunset, Acoma Pueblo, Snowy Plateau and Freezing Over.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {[
              { src: '/images/eiteljorg-ranchos-sunset.jpg', alt: 'Ranchos Sunset — woodblock print by Leon Loughridge' },
              { src: '/images/eiteljorg-acoma-pueblo.jpg', alt: 'Acoma Pueblo — woodblock print by Leon Loughridge' },
              { src: '/images/eiteljorg-snowy-plateau.jpg', alt: 'Snowy Plateau — woodblock print by Leon Loughridge' },
              { src: '/images/eiteljorg-freezing-over.jpg', alt: 'Freezing Over — woodblock print by Leon Loughridge' },
            ].map(img => (
              <div key={img.src} style={{ border: '1px solid var(--border)', padding: '0.5rem', backgroundColor: 'var(--white)' }}>
                <Image src={img.src} alt={img.alt} width={240} height={240} className="w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Watercolor Sketches ── */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="page-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.6rem', marginBottom: '1rem' }}>Watercolor<br />Sketches</h2>
            <p>
              A collection of watercolor sketches available on the Watercolor Page. These are on-site watercolors
              from my adventures around Colorado and New Mexico. Most are loose sheets without frame or matting.
            </p>
            <Link href="/watercolors" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1.5rem', backgroundColor: 'var(--note-btn)', color: '#fff', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Visit The Page
            </Link>
          </div>
          <div className="img-placeholder" style={{ height: '260px' }}>[ Watercolor sketches image ]</div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--rule)', textAlign: 'center' }}>
        <div className="page-wrap" style={{ maxWidth: '680px' }}>
          <p style={{ fontFamily: 'var(--font-avenir), serif', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.9 }}>
            Art has been a part of my life since I can remember. It is how I see what is around me.
            The world makes sense when I can record what I feel and see with sketches and drawings.
            My woodblocks are a more complete story of the moment, with the story filled out and
            my relationship with the image explained.
          </p>
        </div>
      </section>

      {/* ── Modern Bungalow ── */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="page-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <Image src="/images/modern-bungalow-logo.jpg" alt="Modern Bungalow — Denver Colorado" width={300} height={240} className="object-contain mx-auto" />
          <div>
            <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '1rem' }}>Modern Bungalow</h2>
            <p>
              My woodblocks are now on display at Modern Bungalow located on South Gaylord in a lovely historic building
              with parking right behind the shop at the painted doorway in the alley.
              They are open Monday–Saturday 10 AM – 5 PM and Sunday 10 AM – 2 PM.
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
              1028 S. Gaylord Street<br />
              Denver, Colorado 80209<br />
              <a href="tel:3033003332" style={{ color: 'var(--accent)' }}>303-300-3332</a>
            </p>
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
