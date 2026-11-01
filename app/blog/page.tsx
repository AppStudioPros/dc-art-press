'use client'
import { useState } from 'react'
import PageHero from '@/components/PageHero'
import type { Metadata } from 'next'

const posts = [
  {
    title: 'Printing The Woodblock',
    date: 'September 2026',
    category: 'Current Projects',
    excerpt: 'A step-by-step look at the Moku Hanga printing process for the current Ranchos de Taos folio.',
  },
  {
    title: "Final Colors on 'Evening Glow'",
    date: 'August 2026',
    category: 'Current Projects',
    excerpt: "Completing the final color passes on the Evening Glow woodblock — getting the light just right.",
  },
  {
    title: 'Following da Porta Book Assembly',
    date: 'July 2026',
    category: 'Current Projects',
    excerpt: 'Assembling the hand-bound following da Porta edition at the Denver studio.',
  },
]

const tabs = ['All', 'Current Projects', 'Publicity']

export default function BlogPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)

  return (
    <>
      <PageHero title="Studio Blog" subtitle="Notes, updates, and stories from the press room." accent="Dry Creek Art Press" />
      <div className="page-wrap" style={{ padding: '2rem' }}>

        {/* Tab filter */}
        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border)', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: active === tab ? '2px solid var(--accent)' : '2px solid transparent',
                padding: '0.75rem 1.5rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-avenir), sans-serif',
                fontSize: '0.78rem',
                fontWeight: active === tab ? 700 : 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: active === tab ? 'var(--accent)' : 'var(--body-text)',
                marginBottom: '-1px',
                transition: 'all 0.2s',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        {filtered.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {filtered.map(p => (
              <article key={p.title} style={{ border: '1px solid var(--border)', backgroundColor: 'var(--white)' }}>
                <div style={{ height: '200px', backgroundColor: 'var(--card-bg)', borderRadius: '2px' }} />
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', backgroundColor: 'var(--note-btn)', padding: '0.2rem 0.6rem' }}>
                      {p.category}
                    </span>
                    <p style={{ fontSize: '0.72rem', color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.date}</p>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-avenir), serif', fontSize: '1.05rem', color: 'var(--body-text)', marginBottom: '0.5rem' }}>{p.title}</h2>
                  <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>{p.excerpt}</p>
                  <p style={{ marginTop: '0.75rem' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent)', textDecoration: 'underline', cursor: 'pointer' }}>Read more →</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#999' }}>
            <p style={{ fontFamily: 'var(--font-fredericka), serif', fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>No posts yet in this category.</p>
            <p style={{ fontSize: '0.88rem' }}>Check back soon.</p>
          </div>
        )}

      </div>
    </>
  )
}
