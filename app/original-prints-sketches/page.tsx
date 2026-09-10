import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Original Prints & Sketches',
  description: 'Hand printed woodblocks, serigraphs, etchings, and watercolors by Leon Loughridge at Dry Creek Art Press, Denver Colorado.',
}

const categories = [
  { label: 'Woodblocks', href: '/woodblocks', desc: 'Hand printed woodblocks in small editions using the Japanese Moku Hanga technique. Each woodblock is printed individually by hand, making each impression slightly unique.' },
  { label: 'Serigraphs', href: '/serigraphs', desc: 'Hand printed serigraphs in small editions. Serigraphs are printed at ArtGymDenver using professional screen printing equipment. Some prints are gallery sales only.' },
  { label: 'Etchings', href: '/etchings', desc: 'Intaglio prints using various techniques. The etching process involves incising an image into a metal plate, then printing from the recessed lines.' },
  { label: 'Watercolors', href: '/watercolors', desc: 'Studio watercolors and on-site watercolor sketches from adventures around Colorado and New Mexico. Most sketches are loose sheets without frame or matting.' },
  { label: 'The Process', href: '/process', desc: 'A look at the printmaking process — from relief prints and Moku Hanga to serigraph and intaglio. Process demos, videos, and studio blog posts.' },
]

export default function OriginalPrintsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Original Prints & Sketches' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '2rem', marginBottom: '0.5rem' }}>
          Original Prints and Sketches
        </h1>
        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#777', marginBottom: '2rem', maxWidth: '700px' }}>
          As Defined by The Philadelphia Print Shop: An original print is one printed from a matrix on which the design was created by hand and issued as part of the original publishing venture. A fine art print is original only if the artist both conceived and had a direct hand in the production of the print.
        </p>
        <hr className="dc-rule" />
        {categories.map((cat, i) => (
          <div key={cat.label} className="cat-row">
            <div className="img-placeholder" style={{ height: '180px' }}>[ {cat.label} image ]</div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '1.4rem', color: 'var(--body-text)', marginBottom: '0.75rem' }}>{cat.label}</h2>
              <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>{cat.desc}</p>
              <Link href={cat.href} style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'underline', letterSpacing: '0.05em' }}>
                Visit Page →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
