import type { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Woodblocks',
  description: 'Hand printed reduction woodblocks in small editions by Leon Loughridge using the Japanese Moku Hanga technique. Available prints from Dry Creek Art Press, Denver Colorado.',
}

const studioEditions = [
  { title: 'Fresh Snow', dims: '9 x 6', edition: 'Ed. 15', price: null, status: 'Out of Stock', img: '/images/woodblocks/72263d_31b1a245.jpg' },
  { title: "Couse's Easel", dims: '8 x 8', edition: 'Ed. 19', price: 200, status: 'Available', img: '/images/woodblocks/72263d_8e036ae3.jpg' },
  { title: 'Sunlit Rim', dims: '12 x 9', edition: 'Ed. 19', price: null, status: 'Out of Stock', img: '/images/woodblocks/72263d_9632a751.jpg' },
  { title: 'Stormy Gorge', dims: '6 x 9', edition: 'Ed. 19', price: 60, status: 'Available', img: '/images/woodblocks/72263d_3623055e.jpg' },
]

const trailsEnd = [
  { title: 'Senora de la Paz', dims: '22 x 14', edition: 'Ed. 19', price: 180, status: 'Available', img: '/images/woodblocks/72263d_3ba8fe91.jpg' },
  { title: 'Los Fuentes', dims: '22 x 14', edition: 'Ed. 19', price: null, status: 'Out of Stock', img: '/images/woodblocks/72263d_cf21ad6d.jpg' },
  { title: 'Afternoon Cumulus', dims: '22 x 14', edition: 'Ed. 19', price: null, status: 'Out of Stock', img: '/images/woodblocks/72263d_85a337c5.jpg' },
]

function ArtCard({ title, dims, edition, price, status, img }: { title: string; dims: string; edition: string; price: number | null; status: string; img: string }) {
  return (
    <div className="art-card">
      <Image src={img} alt={`${title} — woodblock print by Leon Loughridge`} width={300} height={220} style={{ width: '100%', height: 'auto', display: 'block' }} />
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
          <Image
            src="/images/woodblocks/warm-evening-9x6.jpg"
            alt="Warm Evening — 9x6 woodblock print by Leon Loughridge"
            width={540}
            height={380}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>New Woodblock</p>
            <h1 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '2rem', color: 'var(--body-text)', margin: '0.5rem 0' }}>Woodblocks</h1>
            <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>Warm Evening</h2>
            <p style={{ fontSize: '0.85rem' }}>9 x 6 &nbsp;|&nbsp; Ed. 19</p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', fontStyle: 'italic' }}>Listed by Year</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {[2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map(y => (
                <button key={y} style={{ padding: '0.3rem 0.8rem', border: '1px solid var(--border)', backgroundColor: 'var(--white)', fontSize: '0.75rem', cursor: 'pointer', color: 'var(--accent)' }}>
                  {y}
                </button>
              ))}
            </div>
          </div>
        </div>

        <hr className="dc-rule" />

        {/* Studio Editions */}
        <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Studio Editions</h2>
        <div className="art-grid">
          {studioEditions.map(p => <ArtCard key={p.title} {...p} />)}
        </div>

        <hr className="dc-rule" />

        {/* Trails End */}
        <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Trails End</h2>
        <div className="art-grid">
          {trailsEnd.map(p => <ArtCard key={p.title} {...p} />)}
        </div>

        <hr className="dc-rule" />

        {/* Vintage */}
        <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Vintage Prints</h2>
        <div className="art-grid">
          {[
            { title: 'The Sterling Project', img: '/images/commissions/sterling-project.jpg' },
            { title: 'Japanese Woodblocks', img: '/images/woodblocks/72263d_7f7cb930.jpg' },
          ].map(({ title, img }) => (
            <div key={title} className="art-card">
              <Image src={img} alt={`${title} — woodblock print by Leon Loughridge`} width={300} height={220} style={{ width: '100%', height: 'auto', display: 'block' }} />
              <h4>{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
