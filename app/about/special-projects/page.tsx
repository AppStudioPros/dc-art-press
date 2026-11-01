import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Special Projects',
  description: 'Special projects and side-by-side print comparisons from Leon Loughridge and Dry Creek Art Press.',
}

export default function SpecialProjectsPage() {
  return (
    <>
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '2rem', marginBottom: '1.5rem' }}>Special Projects</h1>
        <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.9, maxWidth: '640px', marginBottom: '1.5rem', color: 'var(--body-text)' }}>
          Special projects and collaborations are available by inquiry. These one-of-a-kind works fall outside the standard editions — unique in scope, material, or intention.
        </p>
        <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.9, maxWidth: '640px', color: 'var(--body-text)' }}>
          Contact Leon directly for details: <a href="mailto:Leon@DCArtPress.com" style={{ color: 'var(--accent)' }}>Leon@DCArtPress.com</a>
        </p>
      </div>
    </>
  )
}
