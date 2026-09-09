import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Exhibiting Galleries',
  description: 'Galleries exhibiting the work of Leon Loughridge. McLarry Fine Art (Santa Fe), Oh Be Joyful (Crested Butte), Ann Korologos (Basalt), Broadmoor Galleries (Colorado Springs), Breckenridge Gallery, Wild Horse Gallery (Steamboat Springs).',
}

const galleries = [
  { name: 'McLarry Fine Art', address: '225 Canyon Rd', city: 'Santa Fe, NM 87501', phone: '505-988-1161', email: 'info@mclarryfineart.com', web: 'https://mclarryfineart.com', note: 'Current exhibit venue — A Tradition of Devotion, Oct 2026' },
  { name: 'Oh Be Joyful Gallery', address: '409 3rd St', city: 'Crested Butte, CO 81224', phone: '970-349-5936', email: null, web: null, note: null },
  { name: 'Ann Korologos Gallery', address: '211 Midland Ave', city: 'Basalt, CO 81621', phone: '970-927-9668', email: null, web: null, note: null },
  { name: 'Broadmoor Galleries', address: '1 Lake Ave', city: 'Colorado Springs, CO 80906', phone: '719-577-5744', email: null, web: null, note: 'Contact: Krista Reyes' },
  { name: 'Breckenridge Gallery', address: '124 S Main St', city: 'Breckenridge, CO 80424', phone: '970 453-2592', email: null, web: null, note: null },
  { name: 'Wild Horse Gallery', address: '802 Lincoln Ave, PO Box 770879', city: 'Steamboat Springs, CO 80477', phone: '970-879-5515', email: null, web: null, note: null },
]

export default function GalleriesPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Exhibiting Galleries' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '2rem', marginBottom: '2rem' }}>
          Exhibiting Galleries
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {galleries.map(g => (
            <div key={g.name} style={{ border: '1px solid var(--border)', padding: '1.5rem', backgroundColor: 'var(--white)' }}>
              <div className="img-placeholder" style={{ height: '130px', marginBottom: '1rem' }}>[ {g.name} ]</div>
              <h3 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--body-text)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>{g.name}</h3>
              <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: '#555' }}>
                {g.address}<br />{g.city}
              </p>
              {g.phone && <p style={{ fontSize: '0.82rem', marginTop: '0.4rem' }}><a href={`tel:${g.phone.replace(/\D/g, '')}`} style={{ color: 'var(--nav-link)' }}>{g.phone}</a></p>}
              {g.email && <p style={{ fontSize: '0.82rem' }}><a href={`mailto:${g.email}`} style={{ color: 'var(--nav-link)' }}>{g.email}</a></p>}
              {g.web && <p style={{ fontSize: '0.82rem' }}><a href={g.web} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--nav-link)' }}>{g.web.replace('https://', '')}</a></p>}
              {g.note && <p style={{ fontSize: '0.78rem', fontStyle: 'italic', color: '#888', marginTop: '0.5rem' }}>{g.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
