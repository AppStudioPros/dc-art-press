import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Commissions',
  description: 'Commission projects from Dry Creek Art Press — hand-printed booklets, maps, and folio prints for organizations and private clients. Leon Loughridge, Denver Colorado.',
}

const commissions = [
  { year: 2025, title: 'Fishing Map', client: 'Eagle Rock Ranch, CO', type: 'Woodblock fly fishing map — Tarryall River', img: 'fishing-map' },
  { year: 2023, title: 'Painting Commission', client: 'Benson Hotel, Denver CO', type: '9 paintings for the hotel', img: 'benson-hotel' },
  { year: 2019, title: 'Lower Long House', client: 'American Board of Urology', type: 'Accordion fold booklet', img: 'lower-long-house' },
  { year: 2018, title: 'Martinez Hacienda', client: 'Alianza de las Americas', type: '8-page booklet', img: 'martinez-hacienda' },
  { year: 2017, title: 'Pecos Mission', client: 'Alianza de las Americas', type: 'Accordion booklet', img: 'pecos-mission' },
  { year: 2015, title: "Couse's Easel", client: 'Couse Sharpe Foundation', type: 'Woodblock for Gala Fundraiser', img: 'couses-easel' },
  { year: 2014, title: 'San Ignacio', client: 'Alianza de las Americas', type: '8-page booklet fund raiser', img: 'san-ignacio' },
  { year: 2013, title: 'Touch Of Spring', client: 'Academy of Life Underwriting', type: 'Folio with woodblock', img: 'touch-of-spring' },
]

export default function CommissionsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Commissions' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '2rem', marginBottom: '1rem' }}>Commissions</h1>
        <p style={{ maxWidth: '700px', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
          Dry Creek Art Press accepts commissions for hand-printed booklets, maps, folios, and framed prints. Each commission project begins with a consultation and mock-up, then works through the design, printing, and binding process entirely by hand.
        </p>
        <p style={{ maxWidth: '700px', fontSize: '0.9rem', marginBottom: '2rem' }}>
          To inquire about a commission, contact <a href="mailto:Leon@DCArtPress.com" style={{ color: 'var(--nav-link)' }}>Leon@DCArtPress.com</a> or call <a href="tel:3039562994" style={{ color: 'var(--nav-link)' }}>303 956-2994</a>.
        </p>
        <hr className="dc-rule" />
        {commissions.map(c => (
          <div key={c.title} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', padding: '2rem 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
            <div className="img-placeholder" style={{ height: '220px' }}>[ {c.title} ]</div>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#999', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{c.year}</p>
              <h2 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--salmon)', fontSize: '1.3rem', marginBottom: '0.3rem' }}>{c.title}</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--nav-link)', marginBottom: '0.5rem' }}>{c.client}</p>
              <p style={{ fontSize: '0.9rem' }}>{c.type}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
