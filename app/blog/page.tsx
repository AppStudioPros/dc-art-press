import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Studio Blog',
  description: 'Studio blog from Dry Creek Art Press — process updates, current projects, and notes from the printmaking studio of Leon Loughridge.',
}

const posts = [
  { title: 'Printing The Woodblock', date: 'September 2026', excerpt: 'A step-by-step look at the Moku Hanga printing process for the current Ranchos de Taos folio.', img: 'blog-printing' },
  { title: "Final Colors on 'Evening Glow'", date: 'August 2026', excerpt: "Completing the final color passes on the Evening Glow woodblock — getting the light just right.", img: 'blog-evening-glow' },
  { title: 'Following da Porta Book Assembly', date: 'July 2026', excerpt: 'Assembling the hand-bound following da Porta edition at the Denver studio.', img: 'blog-da-porta' },
]

export default function BlogPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Studio Blog' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '2rem', marginBottom: '2rem' }}>Studio Blog</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {posts.map(p => (
            <article key={p.title} style={{ border: '1px solid var(--border)', backgroundColor: 'var(--white)' }}>
              <div className="img-placeholder" style={{ height: '200px' }}>[ {p.img} ]</div>
              <div style={{ padding: '1.25rem' }}>
                <p style={{ fontSize: '0.72rem', color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{p.date}</p>
                <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.05rem', color: 'var(--body-text)', marginBottom: '0.5rem' }}>{p.title}</h2>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>{p.excerpt}</p>
                <p style={{ marginTop: '0.75rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--nav-link)', textDecoration: 'underline', cursor: 'pointer' }}>Read more →</span>
                </p>
              </div>
            </article>
          ))}
        </div>
        {/* TODO: Add full blog post content from Wix export */}
        <p style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '0.85rem', color: '#999', textAlign: 'center' }}>
          [ Full blog post content to be migrated from Wix ]
        </p>
      </div>
    </>
  )
}
