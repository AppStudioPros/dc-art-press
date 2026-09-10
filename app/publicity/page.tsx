import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Publicity',
  description: 'Press coverage and publications featuring Leon Loughridge and Dry Creek Art Press. Features in Fine Art Connoisseur, Western Art Collector, International Artist, Printmaking Today, and more.',
}

const press = [
  { title: 'From Brush to Block', pub: 'Steamboat Magazine', date: 'August 2025', desc: null, img: 'steamboat-2025' },
  { title: 'Eagle Rock Ranch Map', pub: 'The Flume', date: 'August 2025', desc: null, img: 'flume-2025' },
  { title: 'Art As Devotion', pub: 'Fine Art Connoisseur', date: 'July / August 2023', desc: null, img: 'fac-2023' },
  { title: 'Spontaneous Creation', pub: 'Western Art Collector', date: 'June 2023', desc: null, img: 'wac-jun-2023' },
  { title: 'Woodblock Paintings', pub: 'Printmaking Today', date: 'April / May 2023', desc: null, img: 'pmt-2023' },
  { title: 'The Ink and the Grain', pub: 'International Artist', date: 'April 2023', desc: 'An article in International Artist that explains the Moku Hanga process wonderfully.', img: 'ia-2023' },
  { title: 'Layer Upon Layer', pub: 'Western Art Collector', date: 'September 2021', desc: null, img: 'wac-sep-2021' },
  { title: 'Small Works Great Wonders Ad', pub: 'National Cowboy & Western Heritage Museum', date: 'November 2021', desc: null, img: 'cowboy-2021' },
  { title: 'A Life In Art', pub: 'Southwest Art', date: 'April 2012', desc: null, img: 'swa-2012' },
  { title: 'Colors Of Autumn', pub: 'Western Art Collector', date: 'August 2010', desc: null, img: 'wac-2010' },
]

export default function PublicityPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Publicity' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '2rem', marginBottom: '2rem' }}>Publicity</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {press.map((p, i) => (
            <div key={p.title} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem', padding: '2rem 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
              <div className="img-placeholder" style={{ height: '160px' }}>[ {p.img} ]</div>
              <div>
                <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{p.title}</h2>
                <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--accent)', marginBottom: '0.25rem' }}>{p.pub}</p>
                <p style={{ fontSize: '0.78rem', color: '#999', marginBottom: p.desc ? '0.75rem' : 0 }}>{p.date}</p>
                {p.desc && <p style={{ fontSize: '0.9rem' }}>{p.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
