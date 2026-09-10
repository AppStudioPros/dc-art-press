import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Books',
  description: 'Editioned books, small edition books, exhibit catalogs, and commission booklets by Leon Loughridge at Dry Creek Art Press.',
}

const sections = [
  { label: 'A Tradition of Devotion', href: '/in-the-works', desc: 'The current folio project — woodblocks and watercolors of the San Francisco de Asis Mission at Ranchos de Taos. Opening October 2026 at McLarry Fine Art, Santa Fe NM.' },
  { label: 'Editioned Books', href: '/books/editioned', desc: 'The Editioned Books are printed in low numbered editions. The books evolve from a nebulous concept, work their way through various hand-print processes until they are finally bound at the DCArtPress studio.' },
  { label: 'Small Edition Books', href: '/books/small-editions', desc: 'Studio Editions are available from DCArtPress as well as exhibiting galleries. The edition sizes and measurements tend to be smaller for these books and they are usually experimental in nature.' },
  { label: 'Exhibit Catalogs', href: '/books/exhibit-catalogs', desc: 'Open edition books and exhibit catalogs available from the DCArtPress bookstore. These publications accompany exhibitions and document the printmaking work.' },
  { label: 'Commissions', href: '/commissions', desc: 'Hand-printed booklets and prints created for organizations and private clients. From mock-up to design to print to binding — each commission is a complete hand-made production.' },
]

export default function BooksPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Books' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '2rem', color: 'var(--body-text)', marginBottom: '0.5rem' }}>Editioned Books and More</h1>
        <div className="img-placeholder" style={{ height: '200px', marginBottom: '2rem' }}>[ Books accordion-fold hero image ]</div>
        <hr className="dc-rule" />
        {sections.map(s => (
          <div key={s.label} className="cat-row">
            <div className="img-placeholder" style={{ height: '150px' }}>[ {s.label} image ]</div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>{s.label}</h2>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{s.desc}</p>
              <Link href={s.href} style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'underline' }}>View Page →</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
