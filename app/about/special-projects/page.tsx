import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Special Projects',
  description: 'Special projects and side-by-side print comparisons from Leon Loughridge and Dry Creek Art Press.',
}

export default function SpecialProjectsPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Special Projects' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '2rem', marginBottom: '1.5rem' }}>Special Projects</h1>
        {/* TODO: Add actual S-Projects content from client */}
        <div className="img-placeholder" style={{ height: '300px', marginBottom: '2rem' }}>[ Special projects content — to be provided by client ]</div>
        <p style={{ fontStyle: 'italic', color: '#999' }}>Content for this section will be added once assets are provided.</p>
      </div>
    </>
  )
}
