import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Woodblocks',
  description: 'Hand printed reduction woodblocks in small editions by Leon Loughridge using the Japanese Moku Hanga technique. Available prints from Dry Creek Art Press, Denver Colorado.',
}

const studioEditions = [
  { title: 'Fresh Snow', dims: '9 x 6', edition: 'Ed. 15', price: null, status: 'Out of Stock' },
  { title: "Couse's Easel", dims: '8 x 8', edition: 'Ed. 19', price: 200, status: 'Available' },
  { title: 'Sunlit Rim', dims: '12 x 9', edition: 'Ed. 19', price: null, status: 'Out of Stock' },
  { title: 'Stormy Gorge', dims: '6 x 9', edition: 'Ed. 19', price: 60, status: 'Available' },
]

const trailsEnd = [
  { title: 'Senora de la Paz', dims: '22 x 14', edition: 'Ed. 19', price: 180, status: 'Available' },
  { title: 'Los Fuentes', dims: '22 x 14', edition: 'Ed. 19', price: null, status: 'Out of Stock' },
  { title: 'Afternoon Cumulus', dims: '22 x 14', edition: 'Ed. 19', price: null, status: 'Out of Stock' },
]

function ArtCard({ title, dims, edition, price, status }: { title: string; dims: string; edition: string; price: number | null; status: string }) {
  return (
    <div className="art-card">
      <div className="img-placeholder" style={{ height: '180px' }}>[ {title} ]</div>
      <h4>{title}</h4>
      <p className="dims">{dims} &nbsp;|&nbsp; {edition}</p>
      {status === 'Available' && price
        ? <><p className="price">${price}</p><button className="buy-btn">Add to Cart</button></>
        : <p className="sold-out">{status}</p>}
    </div>
  )
}

export default function WoodblocksPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Original Prints', href: '/original-prints-sketches' }, { label: 'Woodblocks' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>

        {/* New Woodblock Feature */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem', alignItems: 'center' }}>
          <div className="img-placeholder" style={{ height: '280px' }}>[ Warm Evening — 9x6 image ]</div>
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--nav-link)' }}>New Woodblock</p>
            <h1 style={{ fontFamily: 'var(--font-rye), serif', fontSize: '2rem', color: 'var(--body-text)', margin: '0.5rem 0' }}>Woodblocks</h1>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>Warm Evening</h2>
            <p style={{ fontSize: '0.85rem' }}>9 x 6 &nbsp;|&nbsp; Ed. 19</p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', fontStyle: 'italic' }}>Listed by Year</p>
            {/* Year selector */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {[2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map(y => (
                <button key={y} style={{ padding: '0.3rem 0.8rem', border: '1px solid var(--border)', backgroundColor: 'var(--white)', fontSize: '0.75rem', cursor: 'pointer', color: 'var(--nav-link)' }}>
                  {y}
                </button>
              ))}
            </div>
          </div>
        </div>

        <hr className="dc-rule" />

        {/* Studio Editions */}
        <h2 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Studio Editions</h2>
        <div className="art-grid">
          {studioEditions.map(p => <ArtCard key={p.title} {...p} />)}
        </div>

        <hr className="dc-rule" />

        {/* Trails End */}
        <h2 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Trails End</h2>
        <div className="art-grid">
          {trailsEnd.map(p => <ArtCard key={p.title} {...p} />)}
        </div>

        <hr className="dc-rule" />

        {/* Vintage */}
        <h2 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Vintage Prints</h2>
        <div className="art-grid">
          {['The Sterling Project', 'Japanese Woodblocks'].map(t => (
            <div key={t} className="art-card">
              <div className="img-placeholder" style={{ height: '180px' }}>[ {t} ]</div>
              <h4>{t}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
