import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Exhibit Catalogs',
  description: 'Open edition exhibit catalogs available from Dry Creek Art Press DCAP Bookstore.',
}

const catalogs = [
  { title: 'Gorge Songs — Woodblock Catalog', price: 6 },
  { title: 'A Century of Printmaking in Colorado', price: 15 },
  { title: 'Carved, Inked and Pressed', price: 60 },
]

export default function ExhibitCatalogsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Books', href: '/books' }, { label: 'Exhibit Catalogs' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-rye), serif', fontSize: '2rem', color: 'var(--body-text)', marginBottom: '1rem' }}>Exhibit Catalogs</h1>
        <h2 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '1.5rem' }}>Open Edition Books</h2>
        <div className="art-grid">
          {catalogs.map(c => (
            <div key={c.title} className="art-card">
              <div className="img-placeholder" style={{ height: '180px' }}>[ {c.title} ]</div>
              <h4>{c.title}</h4>
              <p className="price">${c.price.toFixed(2)}</p>
              <button className="buy-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
