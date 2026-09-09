import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Small Edition Books',
  description: 'Small edition and studio books available from Dry Creek Art Press. Titles by Leon Loughridge and others.',
}

const books = [
  { title: 'Denver In Isolation', author: 'Perry Loughridge', price: 16, available: true },
  { title: 'El Rialto', author: 'John Macker', price: 45, available: true },
  { title: 'Three Block Reduction Prints', author: 'Leon Loughridge', price: 325, available: true },
  { title: 'Memories of the Diamond A', author: 'Leon Loughridge', price: 160, available: true },
  { title: 'Traveling With Watercolors', author: 'Leon Loughridge', price: 175, available: true },
]

export default function SmallEditionsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Books', href: '/books' }, { label: 'Small Edition Books' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-rye), serif', fontSize: '2rem', color: 'var(--body-text)', marginBottom: '1rem' }}>Small Edition Books</h1>
        <p style={{ maxWidth: '700px', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Studio editions available from DCArtPress as well as exhibiting galleries. The edition sizes tend to be smaller for these books and they are usually experimental in nature.
        </p>
        <hr className="dc-rule" />
        <div className="art-grid">
          {books.map(b => (
            <div key={b.title} className="art-card">
              <div className="img-placeholder" style={{ height: '160px' }}>[ {b.title} ]</div>
              <h4>{b.title}</h4>
              <p className="dims">{b.author}</p>
              <p className="price">${b.price}</p>
              <button className="buy-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
