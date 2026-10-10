'use client'
import { useState } from 'react'
import Image from 'next/image'
import PageHero from '@/components/PageHero'

const tabs = ['Woodblocks', 'Serigraphs', 'Etchings', 'Watercolors', 'The Process']

/* ── data ── */
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
const serigraphs = [
  { title: 'Pueblo Arroyo', dims: '14 x 11', price: 525, status: 'Available' },
  { title: 'Summer Garden', dims: '14 x 11', price: null, status: 'Out of Stock' },
  { title: 'Summer Splendor', dims: '14 x 11', price: null, status: 'Out of Stock' },
  { title: 'Summer Sparkle', dims: '14 x 11', price: null, status: 'Out of Stock' },
  { title: 'Snow Tracks Demo Booklet', dims: '', price: 45, status: 'Available' },
  { title: 'Pecos Sunrise', dims: '14 x 11', price: null, status: 'Out of Stock' },
]
const etchings = [
  { title: 'The Bear', dims: '8 x 6', price: 45, status: 'Available' },
  { title: 'Covered Bridge Beaver Creek', dims: '9 x 6', price: 75, status: 'Available' },
  { title: 'Main Street', dims: '12 x 9', price: null, status: 'Out of Stock' },
  { title: 'Mellow Yellow', dims: '6 x 9', price: 75, status: 'Available' },
  { title: 'Main Street Pair', dims: '9 x 12', price: null, status: 'Out of Stock' },
  { title: 'Dragonfly', dims: '4 x 6', price: 30, status: 'Available' },
]
const watercolorsGallery = ['MtSoprisMorning','From Will Rodgers S.','Lupines','Frozen Butte','Snow Squall','October-Vail Valley','May-San Luis Lakes','March-HayBarn']
const watercolorsForSale = [
  { title: 'Setting Moon', price: 140 },
  { title: 'Last Light Sketch', price: 180 },
  { title: 'Lodge Pole Hillside', price: 120 },
]
const processSections = [
  { name: 'Relief Prints', desc: 'The image is carved into a block of wood, leaving the design in relief. Ink is applied to the raised surface and transferred to paper.' },
  { name: 'Moku Hanga', desc: 'Traditional Japanese water-based woodblock printing. Multiple blocks are used for different colors, with careful registration between each pass.' },
  { name: 'Serigraph Prints', desc: 'Screen printing with hand-cut stencils. Each color requires a separate screen, and prints are pulled one color at a time by hand.' },
  { name: 'Intaglio Prints', desc: 'The image is incised into a metal plate. Ink fills the recesses; the surface is wiped clean; dampened paper is pressed into the inked lines under great pressure.' },
]

function ArtCard({ title, dims, edition, price, status, img }: { title: string; dims?: string; edition?: string; price: number | null; status: string; img?: string }) {
  return (
    <div className="art-card">
      {img
        ? <Image src={img} alt={`${title} — print by Leon Loughridge`} width={300} height={220} style={{ width: '100%', height: 'auto', display: 'block' }} />
        : <div className="img-placeholder" style={{ height: '180px' }}>[ {title} ]</div>}
      <h4>{title}</h4>
      {(dims || edition) && <p className="dims">{dims}{edition ? ` | ${edition}` : ''}</p>}
      {status === 'Available' && price
        ? <><p className="price">${price}</p><button className="buy-btn">Add to Cart</button></>
        : <p className="sold-out">{status}</p>}
    </div>
  )
}

export default function OriginalPrintsPage() {
  const [active, setActive] = useState(0)

  return (
    <>
      <PageHero title="Original Prints &amp; Sketches" subtitle="Woodblocks, etchings, serigraphs, and watercolors from the Dry Creek Art Press studio." accent="The Collection" />

      {/* What is an Original Print? */}
      <div className="page-wrap" style={{ padding: '2.5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--body-text)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              What is an<br />Original Print?
            </h2>
            <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 600, fontSize: '0.88rem', color: 'var(--body-text)', marginBottom: '0.5rem' }}>
              As Defined by The Philadelphia Print Shop.
            </p>
            <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.85, color: 'var(--body-text)' }}>
              An original print is one printed from a matrix on which the design was created by hand and issued as part of the original publishing venture or as part of a connected, subsequent publishing venture. For fine art prints the criteria used is more strict. A fine art print is original only if the artist both conceived and had a direct hand in the production of the print. An original print should be distinguished from a reproduction, which is produced photo-mechanically, and from a restrike, which is produced as part of a later, unconnected publishing venture.
            </p>
          </div>
          <Image
            src="/images/process/carving-passing-through.jpg"
            alt="Leon Loughridge carving a woodblock at Dry Creek Art Press"
            width={540}
            height={400}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      <div className="page-wrap" style={{ padding: '2rem' }}>
        {/* Tab nav */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {tabs.map((tab, i) => (
            <button key={tab} onClick={() => setActive(i)} style={{
              background: 'none', border: 'none',
              borderBottom: active === i ? '2px solid var(--accent)' : '2px solid transparent',
              padding: '0.75rem 1.5rem', cursor: 'pointer',
              fontFamily: 'var(--font-avenir), sans-serif',
              fontSize: '0.78rem', fontWeight: active === i ? 700 : 400,
              letterSpacing: '0.1em', textTransform: 'uppercase' as const,
              color: active === i ? 'var(--accent)' : 'var(--body-text)',
              marginBottom: '-1px', transition: 'all 0.2s',
            }}>{tab}</button>
          ))}
        </div>

        {/* Woodblocks */}
        {active === 0 && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem', alignItems: 'center' }}>
              <Image src="/images/woodblocks/warm-evening-9x6.jpg" alt="Warm Evening woodblock" width={540} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>New Woodblock</p>
                <h2 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '1.8rem', color: 'var(--body-text)', margin: '0.5rem 0' }}>Warm Evening</h2>
                <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>9 x 6 &nbsp;|&nbsp; Ed. 19</p>
                <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#888', marginBottom: '1rem' }}>Hand printed using the Japanese Moku Hanga technique. Each impression is slightly unique.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  {[2023,2022,2021,2020,2019,2018,2017,2016,2015].map(y => (
                    <button key={y} style={{ padding: '0.3rem 0.8rem', border: '1px solid var(--border)', backgroundColor: 'var(--white)', fontSize: '0.75rem', cursor: 'pointer', color: 'var(--accent)' }}>{y}</button>
                  ))}
                </div>
              </div>
            </div>
            <hr className="dc-rule" />
            <h3 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.3rem', margin: '2rem 0 1rem' }}>Studio Editions</h3>
            <div className="art-grid">{studioEditions.map(p => <ArtCard key={p.title} {...p} />)}</div>
            <hr className="dc-rule" />
            <h3 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.3rem', margin: '2rem 0 1rem' }}>Trails End</h3>
            <div className="art-grid">{trailsEnd.map(p => <ArtCard key={p.title} {...p} />)}</div>
            <hr className="dc-rule" />
            <h3 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.3rem', margin: '2rem 0 1rem' }}>Vintage Prints</h3>
            <div className="art-grid">
              <div className="art-card"><Image src="/images/commissions/sterling-project.jpg" alt="The Sterling Project" width={300} height={220} style={{ width:'100%',height:'auto' }} /><h4>The Sterling Project</h4></div>
              <div className="art-card"><Image src="/images/woodblocks/72263d_7f7cb930.jpg" alt="Japanese Woodblocks" width={300} height={220} style={{ width:'100%',height:'auto' }} /><h4>Japanese Woodblocks</h4></div>
            </div>
          </div>
        )}

        {/* Serigraphs */}
        {active === 1 && (
          <div>
            <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, maxWidth: '640px', marginBottom: '0.5rem', color: 'var(--body-text)' }}>
              Serigraphs are printed at ArtGymDenver using professional screen printing equipment. Each print is hand-pulled in small editions.
            </p>
            <p style={{ fontSize: '0.82rem', fontStyle: 'italic', color: '#888', marginBottom: '2rem' }}>Note: Some prints are gallery sales only and may not be available through this site.</p>
            <hr className="dc-rule" />
            <div className="art-grid">{serigraphs.map(p => <ArtCard key={p.title} title={p.title} dims={p.dims} price={p.price} status={p.status} />)}</div>
          </div>
        )}

        {/* Etchings */}
        {active === 2 && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '2rem', alignItems: 'start' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '1rem', color: 'var(--body-text)' }}>
                  The etching process involves incising an image into a metal plate. The plate is then covered with ink, the surface wiped clean, and the ink remaining in the recessed lines is transferred to dampened paper under the pressure of the printing press.
                </p>
                <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--body-text)' }}>
                  Intaglio printing is one of the oldest printmaking techniques, dating back to the 15th century.
                </p>
              </div>
              <div className="img-placeholder" style={{ height: '200px' }}>[ Intaglio process diagram ]</div>
            </div>
            <hr className="dc-rule" />
            <h3 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.3rem', margin: '1.5rem 0 1rem' }}>Available Etchings</h3>
            <div className="art-grid">{etchings.map(p => <ArtCard key={p.title} title={p.title} dims={p.dims} price={p.price} status={p.status} />)}</div>
          </div>
        )}

        {/* Watercolors */}
        {active === 3 && (
          <div>
            <h3 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.3rem', marginBottom: '1rem' }}>Watercolors Gallery</h3>
            <div className="art-grid">
              {watercolorsGallery.map(t => (
                <div key={t} className="art-card"><div className="img-placeholder" style={{ height: '160px' }}>[ {t} ]</div><h4>{t}</h4></div>
              ))}
            </div>
            <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
              <button style={{ padding: '0.5rem 2rem', border: '1px solid var(--border)', backgroundColor: 'var(--white)', fontSize: '0.8rem', cursor: 'pointer', color: 'var(--accent)' }}>Show More Images</button>
            </div>
            <hr className="dc-rule" />
            <h3 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.3rem', margin: '2rem 0 0.5rem' }}>Watercolor Sketches For Sale</h3>
            <p style={{ fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '1.5rem', color: '#777' }}>On-site watercolors from adventures around Colorado and New Mexico. Most are loose sheets without frame or matting.</p>
            <div className="art-grid">
              {watercolorsForSale.map(p => (
                <div key={p.title} className="art-card">
                  <div className="img-placeholder" style={{ height: '180px' }}>[ {p.title} ]</div>
                  <h4>{p.title}</h4>
                  <p className="price">${p.price}</p>
                  <button className="buy-btn">Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* The Process */}
        {active === 4 && (
          <div>
            <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, maxWidth: '640px', marginBottom: '2rem', color: 'var(--body-text)' }}>
              Every print begins with an idea and ends with an impression. Here is a look at the techniques Leon uses at the Dry Creek Art Press studio.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {processSections.map(s => (
                <div key={s.name} style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--white)' }}>
                  <div className="img-placeholder" style={{ height: '150px', marginBottom: '1rem' }}>[ {s.name} ]</div>
                  <h3 style={{ fontFamily: 'var(--font-fredericka), serif', color: 'var(--accent)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>{s.name}</h3>
                  <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--body-text)' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
