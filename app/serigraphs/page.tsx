import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Serigraphs',
  description: 'Hand printed serigraphs in small editions by Leon Loughridge. Printed at ArtGymDenver. Available from Dry Creek Art Press.',
}

const prints = [
  { title: 'Pueblo Arroyo', dims: '14 x 11', price: 525, status: 'Available' },
  { title: 'Summer Garden', dims: '14 x 11', price: null, status: 'Out of Stock' },
  { title: 'Summer Splendor', dims: '14 x 11', price: null, status: 'Out of Stock' },
  { title: 'Summer Sparkle', dims: '14 x 11', price: null, status: 'Out of Stock' },
  { title: 'Snow Tracks Demo Booklet', dims: '', price: 45, status: 'Available' },
  { title: 'Pecos Sunrise', dims: '14 x 11', price: null, status: 'Out of Stock' },
]

export default function SerigraphsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Original Prints', href: '/original-prints-sketches' }, { label: 'Serigraphs' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-rye), serif', fontSize: '2rem', color: 'var(--body-text)', marginBottom: '0.75rem' }}>Serigraphs</h1>
        <p style={{ maxWidth: '680px', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
          Serigraphs are printed at ArtGymDenver using professional screen printing equipment. Each print is hand-pulled in small editions.
        </p>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#888', marginBottom: '2rem' }}>
          Note: Some prints are gallery sales only and may not be available through this site.
        </p>
        <hr className="dc-rule" />
        <div className="art-grid">
          {prints.map(p => (
            <div key={p.title} className="art-card">
              <div className="img-placeholder" style={{ height: '180px' }}>[ {p.title} ]</div>
              <h4>{p.title}</h4>
              {p.dims && <p className="dims">{p.dims}</p>}
              {p.status === 'Available' && p.price
                ? <><p className="price">${p.price}</p><button className="buy-btn">Add to Cart</button></>
                : <p className="sold-out">{p.status}</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
