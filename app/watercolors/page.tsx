import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Watercolors',
  description: 'Studio watercolors and on-site watercolor sketches by Leon Loughridge. Available sketches from Colorado and New Mexico. Dry Creek Art Press, Denver.',
}

const gallery = [
  'MtSoprisMorning', 'From Will Rodgers S.', 'Lupines', 'Frozen Butte',
  'Snow Sqwl', 'October-Vail Valley', 'May-San Luis Lakes', 'March-HayBarn',
]

const forSale = [
  { title: 'Setting Moon', price: 140 },
  { title: 'Last Light Sketch', price: 180 },
  { title: 'Lodge Pole Hillside', price: 120 },
]

export default function WatercolorsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Original Prints', href: '/original-prints-sketches' }, { label: 'Watercolors' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-rye), serif', fontSize: '2rem', color: 'var(--body-text)', marginBottom: '1.5rem' }}>Watercolors</h1>

        {/* Gallery */}
        <h2 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '1rem' }}>Watercolors Gallery</h2>
        <div className="art-grid">
          {gallery.map(t => (
            <div key={t} className="art-card">
              <div className="img-placeholder" style={{ height: '160px' }}>[ {t} ]</div>
              <h4>{t}</h4>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button style={{ padding: '0.5rem 2rem', border: '1px solid var(--border)', backgroundColor: 'var(--white)', fontSize: '0.8rem', cursor: 'pointer', color: 'var(--nav-link)' }}>
            Show More Images
          </button>
        </div>

        <hr className="dc-rule" />

        {/* Watercolor Sketches for sale */}
        <h2 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '1.4rem', margin: '2rem 0 1rem' }}>Watercolor Sketches</h2>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '1.5rem', color: '#777' }}>
          On-site watercolors from adventures around Colorado and New Mexico. Most are loose sheets without frame or matting.
        </p>
        <div className="art-grid">
          {forSale.map(p => (
            <div key={p.title} className="art-card">
              <div className="img-placeholder" style={{ height: '180px' }}>[ {p.title} ]</div>
              <h4>{p.title}</h4>
              <p className="price">${p.price}</p>
              <button className="buy-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
