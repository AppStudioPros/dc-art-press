'use client'
import { useState } from 'react'
import Image from 'next/image'
import PageHero from '@/components/PageHero'

const editionedBooks = [
  { title: 'Esboccos de Porto', year: 2024, status: 'Available', notes: 'Contact for pricing', img: '/images/books/esboccos-de-porto.jpg' },
  { title: 'Chaco Sojourn', year: 2021, status: 'Available', notes: 'Contact for pricing', img: '/images/books/chaco-sojourn.jpg' },
  { title: 'Gorge Songs', year: 2018, status: 'Available', notes: 'Available through DCAP Bookstore', img: '/images/books/gorge-songs-print.jpg' },
  { title: 'Royal Road', year: 2016, status: 'Sold Out', notes: null, img: '/images/books/royal-road.jpg' },
  { title: 'Las Montanas', year: 2009, status: 'Sold Out', notes: null, img: '/images/books/las-montanas.jpg' },
  { title: 'Spring Thaw in the Gore Range', year: 2008, status: 'Sold Out', notes: null, img: '/images/books/spring-thaw.jpg' },
  { title: 'Woodblocks of the Santa Fe Trail — New Mexico', year: 2008, status: 'Available', notes: '1 copy available', img: '/images/books/title.jpg' },
  { title: 'Woodblocks of the Santa Fe Trail — Colorado', year: 2007, status: 'Sold Out', notes: null },
  { title: 'Chapels of San Luis', year: 2002, status: 'Sold Out', notes: null, img: '/images/books/chapels-of-san-luis.jpg' },
  { title: 'Views of McNichols', year: 2000, status: 'Available', notes: 'Contact for pricing' },
]

const smallEditions = [
  { title: 'Denver In Isolation', author: 'Perry Loughridge', price: 16 },
  { title: 'El Rialto', author: 'John Macker', price: 45 },
  { title: 'Three Block Reduction Prints', author: 'Leon Loughridge', price: 325 },
  { title: 'Memories of the Diamond A', author: 'Leon Loughridge', price: 160 },
  { title: 'Traveling With Watercolors', author: 'Leon Loughridge', price: 175, img: '/images/books/traveling-watercolors-cover.jpg' },
]

const catalogs = [
  { title: 'Gorge Songs — Woodblock Catalog', price: 6 },
  { title: 'A Century of Printmaking in Colorado', price: 15 },
  { title: 'Carved, Inked and Pressed', price: 60 },
]

const tabs = ['Editioned Books', 'Small Editions', 'Exhibit Catalogs', 'Commissions']

export default function BooksPage() {
  const [active, setActive] = useState(0)

  return (
    <>
      <PageHero title="Books &amp; Publications" subtitle="Hand-printed editions, small studio books, exhibit catalogs, and commission booklets." accent="DCAP Bookstore" />
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

      {/* Tab content */}
      {active === 0 && (
        <div>
          <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, maxWidth: '640px', marginBottom: '2rem', color: 'var(--body-text)' }}>
            The Editioned Books are printed in low numbered editions. The books evolve from a nebulous concept, work their way through various hand-print processes until they are finally bound at the DCArtPress studio. Woodblocks are designed and printed specifically for each book.
          </p>
          <div className="art-grid">
            {editionedBooks.map(b => (
              <div key={b.title} className="art-card" style={{ opacity: b.status === 'Sold Out' ? 0.6 : 1 }}>
                {'img' in b && b.img
                  ? <Image src={b.img as string} alt={`${b.title} — book by Leon Loughridge`} width={300} height={180} style={{ width: '100%', height: '180px', objectFit: 'contain', background: '#F0EEE2', display: 'block' }} />
                  : <div style={{ height: '180px', backgroundColor: 'var(--card-bg)', borderRadius: '2px' }} />}
                <h4 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontStyle: 'italic' }}>{b.title}</h4>
                <p className="dims">{b.year}</p>
                {b.status === 'Available'
                  ? <>
                      <p className="price" style={{ color: 'var(--note-btn)', fontSize: '0.8rem', fontWeight: 500 }}>{b.notes ?? 'Contact for pricing'}</p>
                      <a href="mailto:Leon@DCArtPress.com" className="buy-btn" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>Inquire →</a>
                    </>
                  : <p className="price" style={{ color: '#bbb', fontStyle: 'italic' }}>Sold Out</p>
                }
              </div>
            ))}
          </div>
        </div>
      )}

      {active === 1 && (
        <div>
          <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, maxWidth: '640px', marginBottom: '2rem', color: 'var(--body-text)' }}>
            Studio editions available from DCArtPress as well as exhibiting galleries. The edition sizes tend to be smaller for these books and they are usually experimental in nature.
          </p>
          <div className="art-grid">
            {smallEditions.map(b => (
              <div key={b.title} className="art-card">
                {'img' in b && b.img
                  ? <Image src={b.img as string} alt={`${b.title} — book by Leon Loughridge`} width={300} height={160} style={{ width: '100%', height: '160px', objectFit: 'contain', background: '#F0EEE2', display: 'block' }} />
                  : <div style={{ height: '160px', backgroundColor: 'var(--card-bg)', borderRadius: '2px' }} />}
                <h4>{b.title}</h4>
                <p className="dims">{b.author}</p>
                <p className="price">${b.price}</p>
                <button className="buy-btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {active === 2 && (
        <div>
          <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, maxWidth: '640px', marginBottom: '2rem', color: 'var(--body-text)' }}>
            Open edition books and exhibit catalogs available from the DCArtPress bookstore. These publications accompany exhibitions and document the printmaking work.
          </p>
          <div className="art-grid">
            {catalogs.map(c => (
              <div key={c.title} className="art-card">
                <div style={{ height: '180px', backgroundColor: 'var(--card-bg)', borderRadius: '2px' }} />
                <h4>{c.title}</h4>
                <p className="price">${c.price.toFixed(2)}</p>
                <button className="buy-btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {active === 3 && (
        <div style={{ maxWidth: '640px' }}>
          <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '1.5rem', color: 'var(--body-text)' }}>
            Hand-printed booklets and prints created for organizations and private clients. From mock-up to design to print to binding — each commission is a complete hand-made production.
          </p>
          <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '2rem', color: 'var(--body-text)' }}>
            To inquire about a commission, please reach out directly. Each project is discussed individually and quoted based on scope, edition size, and materials.
          </p>
          <a href="mailto:Leon@DCArtPress.com" style={{ display: 'inline-block', padding: '0.65rem 1.75rem', backgroundColor: 'var(--note-btn)', color: '#fff', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Inquire About a Commission
          </a>
        </div>
      )}
    </div>
    </>
  )
}
