import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'About — Bio & Collections',
  description: 'About Leon Loughridge and Dry Creek Art Press. Bio, studio spaces, special collections, and exhibiting galleries.',
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '3rem' }}>

          {/* Sidebar */}
          <aside>
            <h3 style={{ fontFamily: 'var(--font-avenir), serif', fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Bio / Collections</h3>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              {['About The Studio', 'Special Collections', 'Japanese Prints', 'Kondo Chihiro'].map(l => (
                <li key={l} style={{ marginBottom: '0.4rem' }}>
                  <Link href="/about" style={{ color: 'var(--accent)', textDecoration: 'none' }} className="hover:underline">{l}</Link>
                </li>
              ))}
            </ul>
            <h3 style={{ fontFamily: 'var(--font-avenir), serif', fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Exhibiting Galleries</h3>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              {['McLarry Fine Art', 'Oh Be Joyful', 'Ann Korologos', 'Broadmoor Galleries', 'Breckenridge Gallery', 'Wild Horse Gallery'].map(g => (
                <li key={g} style={{ marginBottom: '0.4rem' }}>
                  <Link href="/galleries" style={{ color: 'var(--accent)', textDecoration: 'none' }} className="hover:underline">{g}</Link>
                </li>
              ))}
            </ul>
            <h3 style={{ fontFamily: 'var(--font-avenir), serif', fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>About The Process</h3>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
              {['The Process', 'Relief Prints', 'Moku Hanga', 'Serigraph Prints', 'Intaglio Prints'].map(p => (
                <li key={p} style={{ marginBottom: '0.4rem' }}>
                  <Link href="/process" style={{ color: 'var(--accent)', textDecoration: 'none' }} className="hover:underline">{p}</Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main */}
          <main>
            <h1 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '2rem', marginBottom: '1.5rem' }}>
              ABOUT DCArtPress
            </h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '2rem', marginBottom: '2rem' }}>
              <div className="prose-dc">
                <p>
                  I am passionate about printmaking and watercolor sketching. This website is home to the outcome of my efforts.
                </p>
                <p>
                  Raised in Northern New Mexico, Leon Loughridge developed an early affinity for the Southwestern landscape. Stationed in Germany while in the army, he was able to travel extensively throughout Europe, visiting museums and filling journals with sketches.
                </p>
                <p>
                  On his return to Colorado, Leon studied intaglio techniques and began selling his prints in mountain galleries. Today, Leon Loughridge owns the Dry Creek Art Press publishing company, where he utilizes his printmaking skills to make reduction woodblocks, etchings and limited edition books, hand-printed on a 1920 Vandercook Flatbed Letterpress.
                </p>
                <p>
                  His work is exhibited nationally and collected by numerous institutions including the Denver Art Museum, the Denver Public Library, and the Colorado History Museum.
                </p>
                <p>
                  The studio is located in South Denver and visitors are welcome. Please call or make an appointment to make sure I am in the studio and not out sketching.
                </p>
                {/* TODO: Add full bio text from Leon */}
                <p style={{ fontStyle: 'italic', color: '#999', fontSize: '0.85rem' }}>[Full bio text — to be provided by client]</p>
              </div>
              {/* TODO: Replace with actual Leon photo */}
              <div className="img-placeholder" style={{ height: '240px' }}>[ Leon photo — Couse Sharp Museum ]</div>
            </div>

            <hr className="dc-rule" />

            {/* Studio Spaces */}
            <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.6rem', margin: '2rem 0 1.5rem' }}>Studio Spaces</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              {[
                { name: 'Denver Studio', desc: 'Located in our remodeled garage in south central Denver, the university area. Home base for framing and supplies. Studio visits are welcome.' },
                { name: 'Mountain Studio', desc: 'Just a short hour drive from Denver, at the base of Mt Blue Sky (Mt Evans). The studio is off the grid and surrounded by inspiration.' },
                { name: 'Art Gym Denver', desc: "A printmaker's dream come true — two litho presses, three etching presses, complete serigraph facilities, cafe, and fellow printmakers." },
              ].map(s => (
                <div key={s.name}>
                  <div className="img-placeholder" style={{ height: '160px', marginBottom: '0.75rem' }}>[ {s.name} ]</div>
                  <h3 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1rem', marginBottom: '0.4rem' }}>{s.name}</h3>
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <hr className="dc-rule" />

            {/* Special Collections */}
            <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.6rem', margin: '2rem 0 1rem' }}>Special Collections</h2>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Over the years, I have collected prints from various sources — or should I say, they have found me. I keep saying &ldquo;no more&rdquo; and then turn the corner to find a print I can&apos;t live without.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['Collection Page', 'Japanese Prints', 'Kondo Chihiro'].map(c => (
                <Link key={c} href="/a-bit-more" style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'underline' }}>{c}</Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
