'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const tabs = ['About The Studio', 'Special Collections', 'Special Projects', 'Exhibiting Galleries']

const galleries = [
  { name: 'McLarry Fine Art', location: 'Santa Fe, NM', url: '#' },
  { name: 'Oh Be Joyful', location: 'Crested Butte, CO', url: '#' },
  { name: 'Ann Korologos Gallery', location: 'Basalt, CO', url: '#' },
  { name: 'Broadmoor Galleries', location: 'Colorado Springs, CO', url: '#' },
  { name: 'Breckenridge Gallery', location: 'Breckenridge, CO', url: '#' },
  { name: 'Wild Horse Gallery', location: 'Jackson, WY', url: '#' },
]

export default function AboutPage() {
  const [active, setActive] = useState(0)

  return (
    <div className="page-wrap" style={{ padding: '3rem 2rem' }}>
      {/* Page heading */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ width: '32px', height: '1px', backgroundColor: 'var(--accent)', marginBottom: '1rem' }} />
        <h1 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '0.5rem' }}>
          About
        </h1>
        <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', color: 'var(--body-text)', maxWidth: '560px', lineHeight: 1.8 }}>
          Leon Loughridge, Dry Creek Art Press, and the world of handmade printmaking.
        </p>
      </div>

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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '2.5rem', marginBottom: '2.5rem', alignItems: 'start' }}>
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
            <div className="img-placeholder" style={{ height: '260px' }}>[ Leon portrait ]</div>
          </div>

          <hr className="dc-rule" />

          <h2 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.5rem', margin: '2rem 0 1.5rem' }}>Studio Spaces</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { name: 'Denver Studio', desc: 'Located in our remodeled garage in south central Denver, the university area. Home base for framing and supplies. Studio visits are welcome.' },
              { name: 'Mountain Studio', desc: 'Just a short hour drive from Denver, at the base of Mt Blue Sky (Mt Evans). The studio is off the grid and surrounded by inspiration.' },
              { name: 'Art Gym Denver', desc: "A printmaker's dream come true — two litho presses, three etching presses, complete serigraph facilities, cafe, and fellow printmakers." },
            ].map(s => (
              <div key={s.name}>
                <div className="img-placeholder" style={{ height: '160px', marginBottom: '0.75rem' }}>[ {s.name} ]</div>
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
            {['Japanese Prints', 'Kondo Chihiro', 'Collection Overview'].map(c => (
              <div key={c} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <div className="img-placeholder" style={{ height: '200px', marginBottom: '1rem' }}>[ {c} ]</div>
                <h3 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{c}</h3>
                <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--body-text)', fontStyle: 'italic' }}>
                  [Content to be provided by client]
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Special Projects */}
      {active === 2 && (
        <div style={{ maxWidth: '700px' }}>
          <div className="img-placeholder" style={{ height: '300px', marginBottom: '2rem' }}>[ Special projects content — to be provided by client ]</div>
          <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, color: '#999', fontStyle: 'italic' }}>
            Content for this section will be added once assets are provided.
          </p>
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
                <a href={g.url} style={{ fontSize: '0.75rem', color: 'var(--accent)', textDecoration: 'underline', letterSpacing: '0.05em' }}>View Gallery →</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
