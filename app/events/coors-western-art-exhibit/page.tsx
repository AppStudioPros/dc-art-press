import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Coors Western Art Exhibit 2027',
  description: 'See Leon Loughridge’s work at the 2027 Coors Western Art Exhibit. Find dates for the Blue Jean Preview, Red Carpet Reception, and print demonstration.',
  alternates: { canonical: '/events/coors-western-art-exhibit' },
}

const coorsArtwork = [
  { title: 'Gorge Nocturne', src: '/images/exhibits/gorge-nocturne.webp' },
  { title: 'Mule Deer', src: '/images/exhibits/mule-deer.webp' },
  { title: 'Steeple Repair', src: '/images/exhibits/steeple-repair.webp' },
  { title: 'Ranchos Sunset', src: '/images/exhibits/ranchos-sunset.webp' },
]

export default function CoorsExhibitPage() {
  return (
    <>
      <PageHero title="Coors Western Art Exhibit" subtitle="Artwork and a print demonstration by Leon Loughridge" />
      <section className="page-wrap coors-exhibit" style={{ padding: '2rem' }} aria-labelledby="exhibit-schedule">
        <h2 id="exhibit-schedule" className="coors-exhibit-title">January 2027 schedule</h2>
        <ul className="prose-dc" style={{ margin: '0 auto 2rem', maxWidth: '32rem', listStyle: 'disc', paddingInlineStart: '1.25rem' }}>
          <li><time dateTime="2027-01-06">January 6</time> · Blue Jean Preview</li>
          <li><time dateTime="2027-01-07">January 7</time> · Red Carpet Reception</li>
          <li><time dateTime="2027-01-07">January 7</time>, 10 a.m. to 1 p.m. Mountain time · Print demonstration during the symposium</li>
          <li><time dateTime="2027-01-08">January 8</time>–<time dateTime="2027-01-24">24</time> · Exhibit open</li>
        </ul>
        <h2 className="coors-exhibit-title">Featured artwork</h2>
        <div className="coors-exhibit-grid">
          {coorsArtwork.map(({ title, src }) => (
            <figure key={src}>
              <div className="coors-exhibit-image">
                <Image src={src} alt={`${title} by Leon Loughridge`} fill sizes="(max-width: 600px) 45vw, (max-width: 1080px) 23vw, 235px" />
              </div>
              <figcaption>{title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
