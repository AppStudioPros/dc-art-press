import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Etchings',
  description: 'Intaglio prints using various techniques by Leon Loughridge. Available etchings from Dry Creek Art Press, Denver Colorado.',
}

const prints = [
  { title: 'The Bear', dims: '8 x 6', price: 45, status: 'Available' },
  { title: 'Covered Bridge Beaver Creek', dims: '9 x 6', price: 75, status: 'Available' },
  { title: 'Main Street', dims: '12 x 9', price: null, status: 'Out of Stock' },
  { title: 'Mellow Yellow', dims: '6 x 9', price: 75, status: 'Available' },
  { title: 'Main Street Pair', dims: '9 x 12', price: null, status: 'Out of Stock' },
  { title: 'Dragonfly', dims: '4 x 6', price: 30, status: 'Available' },
]

export default function EtchingsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Original Prints', href: '/original-prints-sketches' }, { label: 'Etchings' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '2rem', alignItems: 'start' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '2rem', color: 'var(--body-text)', marginBottom: '1rem' }}>Etchings</h1>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              The etching process involves incising an image into a metal plate. The plate is then covered with ink, the surface wiped clean, and the ink remaining in the recessed lines is transferred to dampened paper under the pressure of the printing press.
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              Intaglio printing is one of the oldest printmaking techniques, dating back to the 15th century.
            </p>
          </div>
          {/* TODO: Replace with actual intaglio diagram */}
          <div className="img-placeholder" style={{ height: '200px' }}>[ Intaglio process diagram ]</div>
        </div>
        <hr className="dc-rule" />
        <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.4rem', margin: '1.5rem 0 1rem' }}>Available Etchings</h2>
        <div className="art-grid">
          {prints.map(p => (
            <div key={p.title} className="art-card">
              <div className="img-placeholder" style={{ height: '180px' }}>[ {p.title} ]</div>
              <h4>{p.title}</h4>
              <p className="dims">{p.dims}</p>
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
