import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Editioned Books',
  description: 'Limited edition hand-printed and bound books by Leon Loughridge at Dry Creek Art Press. Available titles include Esboccos de Porto, Chaco Sojourn, Gorge Songs, and more.',
}

const books = [
  { title: 'Esboccos de Porto', year: 2024, status: 'Available', price: null, notes: 'Contact for pricing' },
  { title: 'Chaco Sojourn', year: 2021, status: 'Available', price: null, notes: 'Contact for pricing' },
  { title: 'Gorge Songs', year: 2018, status: 'Available', price: null, notes: 'Available through DCAP Bookstore' },
  { title: 'Royal Road', year: 2016, status: 'Sold Out', price: null, notes: null },
  { title: 'Las Montanas', year: 2009, status: 'Sold Out', price: null, notes: null },
  { title: 'Spring Thaw in the Gore Range', year: 2008, status: 'Sold Out', price: null, notes: null },
  { title: 'Woodblocks of the Santa Fe Trail — New Mexico', year: 2008, status: 'Available', price: null, notes: '1 copy available' },
  { title: 'Woodblocks of the Santa Fe Trail — Colorado', year: 2007, status: 'Sold Out', price: null, notes: null },
  { title: 'Chapels of San Luis', year: 2002, status: 'Sold Out', price: null, notes: null },
  { title: 'Views of McNichols', year: 2000, status: 'Available', price: null, notes: 'Contact for pricing' },
]

export default function EditionedBooksPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Books', href: '/books' }, { label: 'Editioned Books' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-rye), serif', fontSize: '2rem', color: 'var(--body-text)', marginBottom: '1rem' }}>Editioned Books</h1>
        <p style={{ maxWidth: '700px', fontSize: '0.9rem', marginBottom: '2rem' }}>
          The Editioned Books are printed in low numbered editions. The books evolve from a nebulous concept, work their way through various hand-print processes until they are finally bound at the DCArtPress studio. Woodblocks are designed and printed specifically for each book.
        </p>
        <hr className="dc-rule" />
        {books.map(b => (
          <div key={b.title} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '2rem', padding: '1.5rem 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
            <div className="img-placeholder" style={{ height: '130px' }}>[ {b.title} ]</div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.15rem', color: 'var(--body-text)', marginBottom: '0.3rem' }}>{b.title}</h3>
              <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>{b.year}</p>
              {b.status === 'Available'
                ? <p style={{ fontSize: '0.85rem', color: 'var(--note-btn)', fontWeight: 500 }}>Available {b.notes ? `— ${b.notes}` : ''}</p>
                : <p style={{ fontSize: '0.85rem', color: '#999', fontStyle: 'italic' }}>Sold Out</p>}
              {b.status === 'Available' && (
                <a href="mailto:Leon@DCArtPress.com" style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--nav-link)', textDecoration: 'underline' }}>
                  Inquire →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
