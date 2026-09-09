import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'About The Process',
  description: 'The printmaking process at Dry Creek Art Press — Moku Hanga woodblock printing, relief prints, serigraph, and intaglio techniques by Leon Loughridge.',
}

const sections = [
  { title: 'Relief Prints', links: ['Relief Basics', 'Multi-Block Print', 'Reduction Printing', 'Demo Page'], desc: 'Relief printing is the oldest form of printmaking. The image stands proud of the plate and accepts the ink, while the non-image areas are cut away.' },
  { title: 'Moku Hanga', links: ['Japanese Woodblock'], desc: 'Moku Hanga is the Japanese method of woodblock printing using water-based inks (rice paste + pigment), brushed across the carved surface of the block and transferred to dampened paper with a baren.' },
  { title: 'Serigraph Prints', links: ['Serigraph Demo'], desc: 'Serigraph (silkscreen) printing is done at ArtGymDenver. Ink is pushed through a fine mesh screen onto paper, one color at a time, to build up the final image.' },
  { title: 'Studio Blog', links: ['View Blog'], desc: 'The Studio Blog documents current projects, process steps, and studio life at Dry Creek Art Press.', href: '/blog' },
  { title: 'Intaglio Prints', links: ['Intaglio Process Page'], desc: 'Intaglio printing involves incising an image into a metal plate. Ink is forced into the recessed lines, the surface wiped clean, and paper pressed under high pressure to pull the image.' },
]

export default function ProcessPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'About The Process' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '2rem', marginBottom: '0.75rem' }}>About The Process</h1>
        <p style={{ maxWidth: '700px', fontSize: '0.9rem', marginBottom: '2rem', fontStyle: 'italic' }}>
          A collection of process demos and discussions — exploring how each print is made from block to paper.
        </p>
        <div className="img-placeholder" style={{ height: '220px', marginBottom: '2rem' }}>[ Process studio image ]</div>
        <hr className="dc-rule" />
        {sections.map(s => (
          <div key={s.title} className="cat-row">
            <div className="img-placeholder" style={{ height: '160px' }}>[ {s.title} ]</div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>{s.title}</h2>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {s.links.map(l => (
                  <Link key={l} href={s.href || '/process'} style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem', border: '1px solid var(--border)', color: 'var(--nav-link)', textDecoration: 'none', backgroundColor: 'var(--white)' }}>
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
