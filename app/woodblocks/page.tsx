'use client'
import { useState } from 'react'
import Image from 'next/image'
import { allWoodblocks, studioEditions, trailsEnd, WOODBLOCK_YEARS, type Woodblock } from '@/lib/woodblocks-data'

function ArtCard({ title, dims, edition, price, status, img, note, series }: Woodblock) {
  return (
    <div className="art-card">
      {img ? (
        <Image
          src={img}
          alt={`${title} — woodblock print by Leon Loughridge`}
          width={300} height={220}
          style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div style={{ width: '100%', height: '200px', background: '#e8e3d8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: '#888', fontStyle: 'italic', textAlign: 'center', padding: '0 1rem' }}>Image coming soon</span>
        </div>
      )}
      <h4 style={{ margin: '0.6rem 0 0.2rem', fontSize: '0.9rem' }}>{title}</h4>
      {series && <p style={{ fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.08em', margin: '0 0 0.2rem', textTransform: 'uppercase' }}>{series}</p>}
      {(dims || edition) && <p className="dims">{dims}{edition ? ` | ${edition}` : ''}</p>}
      {note
        ? <p style={{ fontSize: '0.72rem', color: '#888', fontStyle: 'italic', margin: '0.3rem 0 0' }}>{note}</p>
        : status === 'Available' && price
          ? <><p className="price">${price}</p><button className="buy-btn">Add to Cart</button></>
          : <p className="sold-out">{status ?? 'Inquire'}</p>}
    </div>
  )
}

export default function WoodblocksPage() {
  const [activeYear, setActiveYear] = useState<number | 'all' | 'studio'>('all')

  const yearFiltered = activeYear === 'all'
    ? allWoodblocks.filter(w => w.year !== null)
    : activeYear === 'studio'
      ? [...studioEditions, ...trailsEnd]
      : allWoodblocks.filter(w => w.year === activeYear)

  return (
    <div className="page-wrap" style={{ padding: '2rem 1.5rem' }}>

      {/* Hero */}
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 0.4rem' }}>Dry Creek Art Press</p>
        <h1 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: 'clamp(2rem,5vw,3rem)', color: 'var(--body-text)', margin: '0 0 0.5rem' }}>Woodblocks</h1>
        <p style={{ fontSize: '0.85rem', color: '#666', maxWidth: '580px', lineHeight: 1.65 }}>
          Hand-printed reduction woodblocks in small editions by Leon Loughridge using the Japanese Moku Hanga technique.
          Woodblocks are available from DCArtPress and exhibiting galleries. Some are reserved for gallery sales only.
        </p>
      </div>

      {/* Year filter */}
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', margin: '0 0 0.75rem' }}>Listed by Year</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <button
            onClick={() => setActiveYear('all')}
            style={{
              padding: '0.3rem 0.9rem', fontSize: '0.78rem', cursor: 'pointer',
              border: '1px solid var(--border)',
              background: activeYear === 'all' ? 'var(--accent)' : 'var(--white)',
              color: activeYear === 'all' ? '#fff' : 'var(--accent)',
              fontWeight: activeYear === 'all' ? 700 : 400,
            }}
          >
            All
          </button>
          {WOODBLOCK_YEARS.map(y => (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              style={{
                padding: '0.3rem 0.9rem', fontSize: '0.78rem', cursor: 'pointer',
                border: '1px solid var(--border)',
                background: activeYear === y ? 'var(--accent)' : 'var(--white)',
                color: activeYear === y ? '#fff' : 'var(--accent)',
                fontWeight: activeYear === y ? 700 : 400,
              }}
            >
              {y}
            </button>
          ))}
          <button
            onClick={() => setActiveYear('studio')}
            style={{
              padding: '0.3rem 0.9rem', fontSize: '0.78rem', cursor: 'pointer',
              border: '1px solid var(--border)',
              background: activeYear === 'studio' ? 'var(--accent)' : 'var(--white)',
              color: activeYear === 'studio' ? '#fff' : 'var(--accent)',
              fontWeight: activeYear === 'studio' ? 700 : 400,
            }}
          >
            Studio Editions
          </button>
        </div>
      </div>

      {/* Results count */}
      <p style={{ fontSize: '0.78rem', color: '#888', marginBottom: '1.5rem' }}>
        {activeYear === 'all'
          ? `Showing all ${yearFiltered.length} woodblocks (2015–2023)`
          : activeYear === 'studio'
            ? `${yearFiltered.length} studio edition${yearFiltered.length !== 1 ? 's' : ''}`
            : `${yearFiltered.length} woodblock${yearFiltered.length !== 1 ? 's' : ''} from ${activeYear}`}
      </p>

      {/* Grid */}
      <div className="art-grid">
        {yearFiltered.map((w, i) => (
          <ArtCard key={`${w.title}-${i}`} {...w} />
        ))}
      </div>

      {yearFiltered.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888', padding: '3rem 0', fontStyle: 'italic' }}>
          No woodblocks found for this year.
        </p>
      )}

      <hr className="dc-rule" style={{ margin: '3rem 0' }} />

      {/* Vintage + series links */}
      <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.3rem', margin: '0 0 1rem' }}>Woodblock Series</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
        {[
          { name: 'Sacred Ground (2023)', btn: () => setActiveYear(2023) },
          { name: 'NM ReImagined (2019)', btn: () => setActiveYear(2019) },
          { name: 'Gorge Songs (2017–2018)', btn: () => setActiveYear(2017) },
        ].map(s => (
          <button key={s.name} onClick={s.btn}
            style={{ padding: '0.4rem 1rem', border: '1px solid var(--border)', background: 'var(--white)', fontSize: '0.78rem', cursor: 'pointer', color: 'var(--accent)' }}>
            {s.name}
          </button>
        ))}
      </div>

      <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.3rem', margin: '0 0 0.75rem' }}>Vintage &amp; Special Editions</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        <a href="/commissions" style={{ padding: '0.4rem 1rem', border: '1px solid var(--border)', background: 'var(--white)', fontSize: '0.78rem', color: 'var(--accent)', textDecoration: 'none' }}>
          The Sterling Project
        </a>
        <a href="/collections" style={{ padding: '0.4rem 1rem', border: '1px solid var(--border)', background: 'var(--white)', fontSize: '0.78rem', color: 'var(--accent)', textDecoration: 'none' }}>
          Japanese Woodblocks
        </a>
      </div>
    </div>
  )
}
