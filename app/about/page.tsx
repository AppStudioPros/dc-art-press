'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

const tabs = ['About The Studio', 'Special Collections', 'About The Process', 'Exhibiting Galleries']

const galleries = [
  { name: 'McLarry Fine Art', location: 'Santa Fe, NM', url: 'https://mclarryfineart.com/leon-loughridge' },
  { name: 'Oh Be Joyful Gallery', location: 'Crested Butte, CO', url: 'https://ohbejoyfulgallery.com/artist/leon-loughridge' },
  { name: 'Ann Korologos Gallery', location: 'Basalt, CO', url: 'https://korologosgallery.com/artist/leon-loughridge/#works' },
  { name: 'Broadmoor Galleries', location: 'Colorado Springs, CO', url: 'https://broadmoorgalleries.com/artist/leon-loughridge/' },
  { name: 'Breckenridge Gallery', location: 'Breckenridge, CO', url: 'https://breckenridgegallery.com/artist/leon-loughridge' },
  { name: 'Wild Horse Gallery', location: 'Jackson, WY', url: 'https://www.wildhorsegallery.com/' },
]

export default function AboutPage() {
  const [active, setActive] = useState(0)

  return (
    <>
      <PageHero title="About" subtitle="Leon Loughridge, Dry Creek Art Press, and the world of handmade printmaking." accent="Dry Creek Art Press" />
    <div className="page-wrap" style={{ padding: '3rem 2rem' }}>

      {/* Tab nav */}
      <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid var(--border)', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: active === i ? '2px solid var(--accent)' : '2px solid transparent',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-avenir), sans-serif',
              fontSize: '0.78rem',
              fontWeight: active === i ? 700 : 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: active === i ? 'var(--accent)' : 'var(--body-text)',
              marginBottom: '-1px',
              transition: 'all 0.2s',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* About The Studio */}
      {active === 0 && (
        <div>
          <div className="dc-grid-with-photo" style={{ marginBottom: '2.5rem' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1rem', color: 'var(--body-text)' }}>
                I am passionate about printmaking and watercolor sketching. This website is home to the outcome of my efforts.
              </p>
              <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1rem', color: 'var(--body-text)' }}>
                Raised in Northern New Mexico, Leon Loughridge developed an early affinity for the Southwestern landscape. Stationed in Germany while in the army, he was able to travel extensively throughout Europe, visiting museums and filling journals with sketches.
              </p>
              <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1rem', color: 'var(--body-text)' }}>
                On his return to Colorado, Leon studied intaglio techniques and began selling his prints in mountain galleries. Today, Leon Loughridge owns the Dry Creek Art Press publishing company, where he utilizes his printmaking skills to make reduction woodblocks, etchings and limited edition books, hand-printed on a 1920 Vandercook Flatbed Letterpress.
              </p>
              <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1rem', color: 'var(--body-text)' }}>
                His work is exhibited nationally and collected by numerous institutions including the Denver Art Museum, the Denver Public Library, and the Colorado History Museum.
              </p>
              <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--body-text)' }}>
                The studio is located in South Denver and visitors are welcome. Please call or make an appointment to make sure I am in the studio and not out sketching.
              </p>
            </div>
            <Image
              src="/images/about/leon-with-print.jpg"
              alt="Leon Loughridge — artist and printmaker at Dry Creek Art Press"
              width={200}
              height={260}
              style={{ width: '200px', height: '260px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <hr className="dc-rule" />

          <h2 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.5rem', margin: '2rem 0 1.5rem' }}>Studio Spaces</h2>
          <div className="dc-grid-3">
            {[
              { name: 'Denver Studio', desc: 'Located in our remodeled garage in south central Denver, the university area. Home base for framing and supplies. Studio visits are welcome.', img: '/images/about/72263d_406e4b7c.jpg' },
              { name: 'Mountain Studio', desc: 'Just a short hour drive from Denver, at the base of Mt Blue Sky (Mt Evans). The studio is off the grid and surrounded by inspiration.', img: '/images/about/gallery-exterior.jpg' },
              { name: 'Art Gym Denver', desc: "A printmaker's dream come true — two litho presses, three etching presses, complete serigraph facilities, cafe, and fellow printmakers.", img: '/images/about/art-gym-denver-facade.jpg' },
            ].map(s => (
              <div key={s.name}>
                <Image src={s.img} alt={`${s.name} — Dry Creek Art Press`} width={400} height={160} style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block', marginBottom: '0.75rem' }} />
                <h3 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1rem', marginBottom: '0.4rem' }}>{s.name}</h3>
                <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--body-text)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Special Collections */}
      {active === 1 && (
        <div style={{ maxWidth: '700px' }}>
          <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1.5rem', color: 'var(--body-text)' }}>
            Over the years, I have collected prints from various sources — or should I say, they have found me. I keep saying &ldquo;no more&rdquo; and then turn the corner to find a print I can&apos;t live without.
          </p>
          <div style={{ borderTop: '1px solid var(--border)' }}>
            {[
              { name: 'Japanese Prints', img: '/images/collections/hirosada.jpg' },
              { name: 'Kondo Chihiro', img: '/images/collections/kondo-chihiro.jpg' },
              { name: 'Collection Overview', img: '/images/collections/horse-racing-etching.jpg' },
            ].map(c => (
              <div key={c.name} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <Image src={c.img} alt={`${c.name} — collected works at Dry Creek Art Press`} width={700} height={200} style={{ width: '100%', height: '200px', objectFit: 'contain', background: '#F0EEE2', display: 'block', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{c.name}</h3>
                <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--body-text)' }}>
                  Special collections will be listed here. Contact us to inquire about availability.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* About The Process */}
      {active === 2 && (
        <div style={{ maxWidth: '700px' }}>
          <div style={{ position: 'relative', height: '280px', marginBottom: '2rem', overflow: 'hidden', borderRadius: '2px' }}>
            <Image src="/images/process/72263d_bf508c20da074735960a0c7b4c118d3a~mv2.jpg" alt="Leon Loughridge's printmaking studio" fill style={{ objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>From carved block to pulled impression.</h3>
          <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.92rem', lineHeight: 1.9, color: 'var(--body-text)', marginBottom: '1rem' }}>
            At Dry Creek Art Press, every print is made by hand. Leon works primarily in woodblock — carving the image, inking by brush, and pressing to dampened paper one color at a time. The techniques vary — Moku Hanga, reduction relief, serigraph, intaglio — but the principle is the same: direct contact between artist, material, and paper.
          </p>
          <Link href="/process" style={{ display: 'inline-block', marginTop: '0.5rem', padding: '0.65rem 1.75rem', backgroundColor: 'var(--note-btn)', color: '#fff', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-avenir), sans-serif' }}>
            Explore The Process →
          </Link>
        </div>
      )}

      {/* Exhibiting Galleries */}
      {active === 3 && (
        <div>
          <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.9, maxWidth: '560px', marginBottom: '2rem', color: 'var(--body-text)' }}>
            Leon&apos;s work is exhibited at select fine art galleries across the West. Contact any of the galleries below to inquire about available works.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {galleries.map(g => (
              <div key={g.name} style={{ padding: '1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--white)' }}>
                <h3 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1rem', marginBottom: '0.3rem' }}>{g.name}</h3>
                <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '0.75rem' }}>{g.location}</p>
                <a href={g.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', color: 'var(--accent)', textDecoration: 'underline', letterSpacing: '0.05em' }}>View Gallery →</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  )
}
