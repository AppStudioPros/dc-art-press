import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'A Bit More — Ephemera & Collections',
  description: 'Ephemera, booklets, calendars, and special collections from Dry Creek Art Press. Vintage Japanese prints, Pawel Kontny drawings, and more.',
}

const ephemera = [
  { title: '2026 Desktop Calendar — Watercolor Sketches', price: null, status: 'Out of Stock' },
  { title: 'Carved, Inked and Pressed', price: 60, status: 'Available' },
  { title: 'Aspen Fence Process Booklet', price: 65, status: 'Available' },
]

const collections = [
  { title: 'Pawel Kontny Drawings', desc: 'A collection of drawings by Pawel Kontny.' },
  { title: 'Kondo Chihiro', desc: 'Prints and works by Kondo Chihiro.' },
  { title: '20th Century Prints & Drawings', desc: 'Collected prints and drawings from the 20th century.' },
  { title: 'A Japanese Sketchbook', desc: 'A sketchbook of Japanese imagery and study.' },
  { title: 'The Sterling Project', desc: 'Prints from The Sterling Project series.' },
  { title: 'Japanese Woodblocks (1820–1960)', desc: 'Vintage Japanese woodblock prints from the collection.' },
]

export default function ABitMorePage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'A Bit More' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '2rem', color: 'var(--body-text)', marginBottom: '2rem' }}>A Bit More</h1>

        {/* Ephemera */}
        <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Ephemera</h2>
        <div className="art-grid" style={{ marginBottom: '3rem' }}>
          {ephemera.map(e => (
            <div key={e.title} className="art-card">
              <div className="img-placeholder" style={{ height: '180px' }}>[ {e.title} ]</div>
              <h4>{e.title}</h4>
              {e.status === 'Available' && e.price
                ? <><p className="price">${e.price}</p><button className="buy-btn">Add to Cart</button></>
                : <p className="sold-out">{e.status}</p>}
            </div>
          ))}
        </div>

        <hr className="dc-rule" />

        {/* Collections */}
        <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.5rem', margin: '2rem 0 1.5rem' }}>Collections</h2>
        <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1.5rem', color: '#777' }}>
          Over the years, Leon has collected prints from various sources — or as he says, they have found him.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {collections.map(c => (
            <div key={c.title} style={{ border: '1px solid var(--border)', padding: '1.25rem', backgroundColor: 'var(--white)' }}>
              <div className="img-placeholder" style={{ height: '140px', marginBottom: '0.75rem' }}>[ {c.title} ]</div>
              <h3 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-avenir), serif', color: 'var(--body-text)', marginBottom: '0.4rem' }}>{c.title}</h3>
              <p style={{ fontSize: '0.82rem', color: '#777' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
