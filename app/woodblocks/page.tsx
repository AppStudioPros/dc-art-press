import type { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumb from '@/components/Breadcrumb'
import FadingArtCard from '@/components/FadingArtCard'

export const metadata: Metadata = {
  title: 'Woodblocks',
  description: 'Hand printed reduction woodblocks in small editions by Leon Loughridge using the Japanese Moku Hanga technique. Available prints from Dry Creek Art Press, Denver Colorado.',
}

const studioEditions = [
  { title: 'Fresh Snow', dims: '9 x 6', edition: 'Ed. 15', price: null, status: 'Out of Stock', img: '/images/woodblocks/snowy-mesa.jpg' },
  { title: "Couse's Easel", dims: '8 x 8', edition: 'Ed. 19', price: 200, status: 'Available', img: '/images/woodblocks/72263d_8e036ae3.jpg' },
  { title: 'Sunlit Rim', dims: '12 x 9', edition: 'Ed. 19', price: null, status: 'Out of Stock', img: '/images/woodblocks/72263d_9632a751.jpg' },
  { title: 'Stormy Gorge', dims: '6 x 9', edition: 'Ed. 19', price: 60, status: 'Available', img: '/images/woodblocks/log-cabin-barn.jpg' },
]

const trailsEnd = [
  { title: 'Senora de la Paz', dims: '22 x 14', edition: 'Ed. 19', price: 180, status: 'Available', img: '/images/woodblocks/adobe-church.jpg' },
  { title: 'Los Fuentes', dims: '22 x 14', edition: 'Ed. 19', price: null, status: 'Out of Stock', img: '/images/woodblocks/72263d_cf21ad6d.jpg' },
  { title: 'Afternoon Cumulus', dims: '22 x 14', edition: 'Ed. 19', price: null, status: 'Out of Stock', img: '/images/woodblocks/72263d_85a337c5.jpg' },
]

function ArtCard({ title, dims, edition, price, status, img }: { title: string; dims: string; edition: string; price: number | null; status: string; img: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center', padding: '2rem 0', borderBottom: '1px solid var(--rule)' }}>
      {/* Left: fading image card */}
      <div style={{ backgroundColor: '#F0EEE2', border: '1px solid rgba(162,111,76,0.15)', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          src={img}
          alt={`${title} — woodblock print by Leon Loughridge`}
          width={400}
          height={400}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
      {/* Right: text */}
      <div>
        <div style={{ width: '28px', height: '1px', backgroundColor: '#A26F4C', marginBottom: '1rem' }} />
        <h3 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', color: 'var(--body-text)', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '0.25rem', letterSpacing: '0.04em' }}>{dims} &nbsp;·&nbsp; {edition}</p>
        {status === 'Available' && price ? (
          <>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#A26F4C', margin: '1rem 0 0.75rem' }}>${price}</p>
            <button style={{ padding: '0.55rem 1.6rem', backgroundColor: '#4E574B', color: '#fff', border: 'none', fontSize: '0.78rem', letterSpacing: '0.09em', textTransform: 'uppercase', cursor: 'pointer' }}>
              Add to Cart
            </button>
          </>
        ) : (
          <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{status}</p>
        )}
      </div>
    </div>
  )
}

export default function WoodblocksPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Original Prints', href: '/original-prints-sketches' }, { label: 'Woodblocks' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>

        {/* Hero feature — fading art card + text */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', marginBottom: '3rem', alignItems: 'center' }}>
          <FadingArtCard />
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>Hand Printed · Small Editions</p>
            <h1 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--body-text)', margin: '0.5rem 0 1rem', lineHeight: 1.2 }}>Woodblocks</h1>
            <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.85, color: '#333', marginBottom: '1.5rem', maxWidth: '380px' }}>
              Hand printed reduction woodblocks in small editions using the Japanese Moku Hanga technique. Each print is hand-pulled and signed by Leon Loughridge.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
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
        <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.3rem', margin: '2rem 0 0', letterSpacing: '0.04em' }}>Studio Editions</h2>
        {studioEditions.map(p => <ArtCard key={p.title} {...p} />)}

        {/* Trails End */}
        <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.3rem', margin: '2.5rem 0 0', letterSpacing: '0.04em' }}>Trails End</h2>
        {trailsEnd.map(p => <ArtCard key={p.title} {...p} />)}

        {/* Vintage */}
        <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.3rem', margin: '2.5rem 0 0', letterSpacing: '0.04em' }}>Vintage Prints</h2>
        {[
          { title: 'The Sterling Project', img: '/images/commissions/sterling-project.jpg', dims: 'Various', edition: 'Ltd.', price: null, status: 'Inquire', },
          { title: 'Japanese Woodblocks', img: '/images/woodblocks/72263d_7f7cb930.jpg', dims: 'Various', edition: 'Ltd.', price: null, status: 'Inquire', },
        ].map(p => <ArtCard key={p.title} {...p} />)}
      </div>
    </>
  )
}
