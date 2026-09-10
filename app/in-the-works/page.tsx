import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'A Tradition of Devotion — In The Works',
  description: 'Current project at Dry Creek Art Press — A Tradition of Devotion. Woodblocks and watercolors of the San Francisco de Asis Mission at Ranchos de Taos. Opening October 2026 at McLarry Fine Art, Santa Fe NM.',
}

export default function InTheWorksPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Books', href: '/books' }, { label: 'A Tradition of Devotion' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
          A Tradition Of Devotion
        </h1>
        <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic', marginBottom: '2rem' }}>
          Opening October 16, 2026 at McLarry Fine Art — 225 Canyon Rd, Santa Fe NM 87501
        </p>

        {/* Folio Prints */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.4rem', marginBottom: '1rem' }}>The Folio Prints</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
            <div className="img-placeholder" style={{ height: '240px' }}>[ Folio prints image ]</div>
            <div className="prose-dc">
              <p>The folio consists of 16 folios, 2 artist proofs. Each folio contains woodblocks and watercolors depicting the San Francisco de Asis Mission church at Ranchos de Taos, NM — one of the most painted and photographed adobe structures in North America.</p>
              <p>Approximate pricing: ~$2,600 for a set of seven prints.</p>
            </div>
          </div>
        </section>

        <hr className="dc-rule" />

        {/* Watercolors */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.4rem', marginBottom: '1rem' }}>The Watercolors</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="prose-dc">
              <p>On-site watercolor sketches painted during visits to the Ranchos de Taos mission. These companion works provide the initial color and composition studies for the woodblock editions.</p>
            </div>
            <div className="img-placeholder" style={{ height: '200px' }}>[ Watercolors of the mission ]</div>
          </div>
        </section>

        <hr className="dc-rule" />

        {/* In The Process */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.4rem', marginBottom: '1rem' }}>In The Process</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="img-placeholder" style={{ height: '200px' }}>[ Studio process photo ]</div>
            <div className="prose-dc">
              <p>The woodblock process begins with drawings and watercolor sketches made on-site. The image is then transferred to cherry wood blocks, carved, and hand-printed using the Japanese Moku Hanga method with rice paste and watercolor pigments.</p>
            </div>
          </div>
        </section>

        <hr className="dc-rule" />

        {/* Large Woodblocks */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.4rem', marginBottom: '1rem' }}>Large Woodblocks</h2>
          <div className="img-placeholder" style={{ height: '260px', marginBottom: '1rem' }}>[ Large woodblocks image ]</div>
          <div className="prose-dc">
            <p>Larger format woodblocks of the Ranchos de Taos mission — these take the most time and are produced in the smallest editions.</p>
          </div>
        </section>

        <hr className="dc-rule" />

        {/* Printing the Woodblocks */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.4rem', marginBottom: '1rem' }}>Printing The Woodblocks</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="prose-dc">
              <p>Using the Japanese Moku Hanga technique, each color is printed one at a time. Rice paste is mixed with watercolor pigment and brushed across the carved surface of the woodblock with stiff-haired brushes. Paper is registered to pins and the image transferred with a baren — a textured disk — allowing 4–5 colors to be printed in an afternoon.</p>
            </div>
            <div className="img-placeholder" style={{ height: '200px' }}>[ Printing process image ]</div>
          </div>
        </section>
      </div>
    </>
  )
}
