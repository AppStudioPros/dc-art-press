'use client'

import { useId, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './WoodblockCollection.module.css'

type ArchivePrint = {
  title: string
  src?: string          // optional — pieces awaiting image upload show a placeholder
  year?: number
  dimensions?: string
  editionSize?: number
  selected?: boolean
  series?: string
  technique?: string
  note?: string
}

const archive: ArchivePrint[] = [
  // ── 2023 ──────────────────────────────────────────────────────────────
  { title: 'Gorge Nocturne',              year: 2023, dimensions: '18 × 12' },
  { title: 'Viejo San Acacio',            year: 2023, dimensions: '12 × 9' },
  { title: 'Rio Grande Gorge Track',      year: 2023, dimensions: '11.5 × 16.5' },
  { title: 'Snowy Plateau',               year: 2023, dimensions: '12 × 9',  src: '/images/woodblocks/snowy-mesa.jpg' },
  { title: 'Old Rio Pueblo Road',         year: 2023, dimensions: '12 × 9' },
  { title: 'March Dance',                 year: 2023, dimensions: '14.75 × 20' },
  { title: 'Quaral Mission',              year: 2023,                           src: '/images/woodblocks/adobe-church.jpg' },
  { title: 'Fields Of Gold',              year: 2023 },
  { title: 'Spirits Of Abo',              year: 2023, dimensions: '18 × 12',  src: '/images/woodblocks/desert-pueblo-sunset.jpg' },
  { title: 'Idle Clouds',                 year: 2023 },
  { title: 'Snow Angel',                  year: 2023 },
  { title: 'Sunrise, Broadmoor Motif',    year: 2023, dimensions: '12 × 9' },
  { title: 'Moon Rise, Broadmoor Motif',  year: 2023, dimensions: '12 × 9' },
  { title: 'Warm Evening',                year: 2023, dimensions: '9 × 6',    src: '/images/woodblocks/warm-evening-9x6.jpg', selected: true },
  // ── 2022 ──────────────────────────────────────────────────────────────
  { title: 'Afternoon Thunderheads',  year: 2022 },
  { title: 'Evening Enchantment',     year: 2022 },
  { title: 'Frosty Moon',             year: 2022 },
  { title: 'November Tapestry',       year: 2022 },
  { title: 'March Ascent',            year: 2022 },
  { title: 'Frosty Streamers',        year: 2022 },
  { title: 'Moon Crossing',           year: 2022 },
  // ── 2021 ──────────────────────────────────────────────────────────────
  { title: 'Sunset Chapel',  year: 2021, src: '/images/woodblocks/sunset-chapel.jpg', selected: true },
  { title: 'San Geronimo',   year: 2021 },
  // ── 2020 ──────────────────────────────────────────────────────────────
  { title: 'Aspen Mtn McLains Flat',    year: 2020, src: '/images/woodblocks/cb-evening.jpg' },
  { title: 'Morning Float',             year: 2020 },
  { title: 'Flurries At The Broadmoor', year: 2020 },
  { title: 'Emile',                     year: 2020 },
  { title: 'Evening Iris',              year: 2020 },
  { title: 'Summer Lily',               year: 2020 },
  { title: 'Sunny Iris',                year: 2020 },
  // ── 2019 ──────────────────────────────────────────────────────────────
  { title: 'Pecos Mission 1780',       year: 2019, series: 'NM ReImagined' },
  { title: 'Chaco Canyon Sunrise',     year: 2019, series: 'NM ReImagined' },
  { title: 'Passing Time',             year: 2019, dimensions: '14 × 11', series: 'NM ReImagined' },
  { title: 'Lodgepole Sunset',         year: 2019 },
  { title: 'Pecos Reconstruction 1694',year: 2019, series: 'NM ReImagined' },
  { title: 'Lower Cliff House',        year: 2019, series: 'NM ReImagined' },
  { title: 'Frijoles Canyon',          year: 2019, series: 'NM ReImagined' },
  { title: 'Cicuye Morning',           year: 2019, series: 'NM ReImagined' },
  // ── 2018 ──────────────────────────────────────────────────────────────
  { title: "Wet Mtn Hay", year: 2018, src: "/images/woodblocks/archive/2018/wet-mtn-hay.webp", dimensions: "16 × 7 in.", technique: "Moku Hanga" },
  { title: "Moon Gorge", year: 2018, src: "/images/woodblocks/archive/2018/moon-gorge.webp", dimensions: "14 × 6 in.", technique: "Walnut oil-based ink", series: "Gorge Songs" },
  { title: "Moon Crossing", year: 2018, src: "/images/woodblocks/archive/2018/moon-crossing.webp", dimensions: "6.5 × 4 in.", technique: "Walnut oil-based ink", series: "Gorge Songs" },
  { title: "Middle of the Earth", year: 2018, src: "/images/woodblocks/archive/2018/middle-of-the-earth.webp", dimensions: "11 × 8.5 in.", technique: "Moku Hanga", series: "Gorge Songs" },
  { title: "Humpbacked Hills", year: 2018, src: "/images/woodblocks/archive/2018/humpbacked-hills.webp", dimensions: "8.5 × 11 in.", technique: "Walnut oil-based ink", series: "Gorge Songs" },
  { title: "Sunset", year: 2018, src: "/images/woodblocks/archive/2018/sunset.webp", dimensions: "8.5 × 11 in.", technique: "Walnut oil-based ink", series: "Gorge Songs" },
  { title: "Cliffs Edge", year: 2018, src: "/images/woodblocks/archive/2018/cliffs-edge.webp", dimensions: "14 × 11 in.", technique: "Walnut oil-based ink", series: "Gorge Songs" },
  { title: "Cedar Smoke", year: 2018, src: "/images/woodblocks/archive/2018/cedar-smoke.webp", dimensions: "7 × 9 in.", technique: "Moku Hanga", series: "Gorge Songs" },
  { title: "Butte Sunset", year: 2018, src: "/images/woodblocks/archive/2018/butte-sunset.webp", dimensions: "16 × 7 in.", technique: "Moku Hanga", note: "Shown at the 2019 Coors Western Art Exhibit." },
  { title: "Morning Walk, Brooklyn Bridge", year: 2018, src: "/images/woodblocks/archive/2018/morning-walk-brooklyn-bridge.webp", dimensions: "16 × 7 in.", technique: "Moku Hanga", note: "Shown at the American Masters exhibition at the Salmagundi Club in New York City." },
  { title: "Bear Clouds", year: 2018, src: "/images/woodblocks/archive/2018/bear-clouds.webp", dimensions: "7 × 4 in.", technique: "Walnut oil-based ink", series: "Gorge Songs" },
  // ── 2017 ──────────────────────────────────────────────────────────────
  { title: "Wild Rivers", year: 2017, src: "/images/woodblocks/archive/2017/wild-rivers.webp", dimensions: "9 × 7 in.", technique: "Walnut oil-based ink", series: "Gorge Songs", note: "Featured print in Folio One." },
  { title: "White Waters", year: 2017, src: "/images/woodblocks/archive/2017/white-waters.webp", dimensions: "7 × 9 in.", technique: "Walnut oil-based ink", series: "Gorge Songs" },
  { title: "Mono tone", year: 2017, src: "/images/woodblocks/archive/2017/mono-tone.webp", dimensions: "7 × 12 in.", technique: "Walnut oil-based ink", series: "Gorge Songs" },
  { title: "Gorge Trail", year: 2017, src: "/images/woodblocks/archive/2017/gorge-trail.webp", dimensions: "17 × 11 in.", technique: "Moku Hanga", series: "Gorge Songs", note: "Featured print in Folio Two." },
  { title: "Gorge Song", year: 2017, src: "/images/woodblocks/archive/2017/gorge-song.webp", dimensions: "8.5 × 21 in.", technique: "Moku Hanga", series: "Gorge Songs" },
  { title: "Fractured Gorge", year: 2017, src: "/images/woodblocks/archive/2017/fractured-gorge.webp", dimensions: "9 × 7 in.", technique: "Walnut oil-based ink", series: "Gorge Songs" },
  { title: "Whispers of White Water", year: 2017, src: "/images/woodblocks/archive/2017/whispers-of-white-water.webp", dimensions: "7.75 × 11.75 in.", technique: "Walnut oil-based ink", series: "Gorge Songs" },
  { title: "Hawk Circles", year: 2017, src: "/images/woodblocks/archive/2017/hawk-circles.webp", dimensions: "6 × 7 in.", technique: "Walnut oil-based ink", series: "Gorge Songs" },
  { title: "Book Of Origins", year: 2017, src: "/images/woodblocks/archive/2017/book-of-origins.webp", dimensions: "7 × 10 in.", technique: "Walnut oil-based ink", series: "Gorge Songs" },
  { title: "Wild Horses Below Mt Blanca", year: 2017, src: "/images/woodblocks/archive/2017/wild-horses-below-mt-blanca.webp", dimensions: "7.5 × 8 in.", technique: "Moku Hanga", note: "Shown at the 2018 Coors Western Art Exhibit." },
  { title: "Moon Over Gorge", year: 2017, src: "/images/woodblocks/archive/2017/moon-over-gorge.webp", dimensions: "16 × 7 in.", technique: "Moku Hanga", series: "Gorge Songs" },
  { title: "Above Bear Lake", year: 2017, src: "/images/woodblocks/archive/2017/above-bear-lake.webp", dimensions: "22 × 14 in.", technique: "Moku Hanga" },
  // ── 2016 ──────────────────────────────────────────────────────────────
  { title: 'Senora de la Paz', src: '/images/woodblocks/archive/2016/senora-de-la-paz.webp', year: 2016, dimensions: '6 × 6 in.', editionSize: 36 },
  { title: 'Last Spruce', src: '/images/woodblocks/archive/2016/last-spruce.webp', year: 2016, dimensions: '16 × 7 in.', editionSize: 21 },
  { title: 'Winters Hay', src: '/images/woodblocks/archive/2016/winters-hay.webp', year: 2016, dimensions: '9 × 12 in.', editionSize: 18 },
  { title: 'Peak Study', src: '/images/woodblocks/archive/2016/peak-study.webp', year: 2016, dimensions: '10 × 8 in.', editionSize: 15 },
  { title: 'Peak Nocturne', src: '/images/woodblocks/archive/2016/peak-nocturne.webp', year: 2016, dimensions: '10 × 8 in.', editionSize: 8 },
  { title: 'Golden Sentinels', src: '/images/woodblocks/archive/2016/golden-sentinels.webp', year: 2016, dimensions: '18 × 12 in.', editionSize: 14 },
  { title: 'Barn Study', src: '/images/woodblocks/archive/2016/barn-study.webp', year: 2016, dimensions: '8 × 10 in.', editionSize: 14 },
  { title: 'Aspen Stand', src: '/images/woodblocks/archive/2016/aspen-stand.webp', year: 2016, dimensions: '12 × 9 in.', editionSize: 26 },
  { title: 'Aglow', src: '/images/woodblocks/archive/2016/aglow.webp', year: 2016, dimensions: '14 × 11 in.', editionSize: 16 },
  // ── 2015 ──────────────────────────────────────────────────────────────
  { title: 'Shady Vista', src: '/images/woodblocks/archive/2015/shady-vista.webp', year: 2015, dimensions: '6.5 × 16.5' },
  { title: 'San Xavier Interior', src: '/images/woodblocks/archive/2015/san-xavier-interior.webp', year: 2015, dimensions: '8 × 5' },
  { title: 'San Xavier Mission', src: '/images/woodblocks/archive/2015/san-xavier-mission.webp', year: 2015, dimensions: '5.5 × 8.5' },
  { title: 'Rider Companion', src: '/images/woodblocks/archive/2015/rider-companion.webp', year: 2015, dimensions: '8 × 6' },
  { title: 'Mountain Cathedral', src: '/images/woodblocks/archive/2015/mountain-cathedral.webp', year: 2015, dimensions: '10.5 × 4.5' },
  { title: 'Gnarled Aspen', src: '/images/woodblocks/archive/2015/gnarled-aspen.webp', year: 2015, dimensions: '10.5 × 4.5' },
  { title: 'Gore Range Sunrise', src: '/images/woodblocks/archive/2015/gore-range-sunrise.webp', year: 2015, dimensions: '18 × 12' },
  { title: 'Morning Reflections', src: '/images/woodblocks/archive/2015/morning-reflections.webp', year: 2015, dimensions: '18 × 12' },
  { title: 'Haybarn', src: '/images/woodblocks/archive/2015/haybarn.webp', year: 2015, dimensions: '18 × 12' },
  { title: 'Colorado Bridge', src: '/images/woodblocks/archive/2015/colorado-bridge.webp', year: 2015, dimensions: '10.5 × 4.5' },
  { title: 'Gilded Adobe At Trampas', src: '/images/woodblocks/archive/2015/gilded-adobe-at-trampas.webp', year: 2015, dimensions: '14 × 11' },
  { title: 'Ten Mile Range', src: '/images/woodblocks/archive/2015/ten-mile-range.webp', year: 2015, dimensions: '10.5 × 4.5' },
  { title: 'Arroyo Seco Dusk', src: '/images/woodblocks/archive/2015/arroyo-seco-dusk.webp', year: 2015, dimensions: '6.5 × 16.5' },
  { title: 'Below Sopris', src: '/images/woodblocks/archive/2015/below-sopris.webp', year: 2015, dimensions: '9 × 7' },
  { title: 'Aspen Glow', src: '/images/woodblocks/archive/2015/aspen-glow.webp', year: 2015, dimensions: '10.5 × 4.5' },
  { title: 'Arroyo Seco Arch', src: '/images/woodblocks/archive/2015/arroyo-seco-arch.webp', year: 2015, dimensions: '16 × 7' },
]

const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]

const studioEditions = [
  { title: 'Fresh Snow', dims: '9 x 6', edition: 'Ed. 15', price: null, status: 'Out of Stock', img: '/images/woodblocks/72263d_31b1a245.jpg' },
  { title: "Couse's Easel", dims: '8 x 8', edition: 'Ed. 19', price: 200, status: 'Available', img: '/images/woodblocks/72263d_8e036ae3.jpg' },
  { title: 'Sunlit Rim', dims: '12 x 9', edition: 'Ed. 19', price: null, status: 'Out of Stock', img: '/images/woodblocks/72263d_9632a751.jpg' },
  { title: 'Stormy Gorge', dims: '6 x 9', edition: 'Ed. 19', price: 60, status: 'Available', img: '/images/woodblocks/72263d_3623055e.jpg' },
]
const vintagePrints = [
  { title: 'The Sterling Project', img: '/images/commissions/sterling-project.jpg' },
  { title: 'Japanese Woodblocks', img: '/images/woodblocks/72263d_7f7cb930.jpg' },
]

export default function WoodblockCollection({ pageHeading = false }: { pageHeading?: boolean }) {
  const id = useId()
  const dialog = useRef<HTMLDialogElement>(null)
  const [year, setYear] = useState('')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const prints = archive.filter(print => year ? print.year === Number(year) : print.selected)
  const slides = prints.filter(print => Boolean(print.src))
  const activePrint = activeIndex === null ? undefined : slides[activeIndex]
  const title = year ? `Woodblocks from ${year}` : 'Selected Woodblocks'
  const Heading = pageHeading ? 'h1' : 'h2'
  const SectionHeading = pageHeading ? 'h2' : 'h3'

  function moveSlide(direction: number) {
    setActiveIndex(index => index === null ? null : (index + direction + slides.length) % slides.length)
  }

  return (
    <section aria-labelledby={`${id}-heading`}>
      <div className={styles.feature}>
        <Heading id={`${id}-heading`} className={styles.title}>Woodblocks</Heading>
        <figure>
          <Image
            src="/images/woodblocks/storms-passing.webp"
            alt="The Ranchos de Taos mission beneath a clearing storm"
            width={600}
            height={905}
            sizes="(max-width: 600px) 90vw, 380px"
          />
          <figcaption><cite>Storm’s Passing</cite>, Woodblock, 18 × 12 in.</figcaption>
        </figure>
      </div>

      <hr className="dc-rule" />

      <div className={styles.galleryHeading}>
        <SectionHeading className={styles.sectionTitle}>{title}</SectionHeading>
        <label className={styles.filter}>
          Browse by year
          <select value={year} onChange={event => setYear(event.target.value)}>
            <option value="">Selected Woodblocks</option>
            {years.map(value => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
      </div>

      {year === '2016' && (
        <p>
          <a href="https://www.dcartpress.com/_files/ugd/72263d_263614916ae14ae2920c3bc25e6593ac.pdf">
            Original 2016 price list (PDF)
          </a>
        </p>
      )}
      <p role="status">
        {prints.length === 0 && `Prints for ${year} are coming soon.`}
      </p>
      {prints.length > 0 && (
        <div className={styles.grid}>
          {prints.map(print => (
            <button
              key={print.title}
              className={styles.thumbnail}
              type="button"
              aria-label={`Enlarge ${print.title}`}
              aria-haspopup="dialog"
              onClick={() => {
                if (!print.src) return
                setActiveIndex(slides.indexOf(print))
                dialog.current?.showModal()
              }}
              style={!print.src ? { cursor: 'default' } : undefined}
            >
              <span className={styles.thumbnailImage}>
                {print.src
                  ? <Image src={print.src} alt="" fill sizes="(max-width: 600px) 45vw, (max-width: 1080px) 30vw, 340px" />
                  : <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '0.65rem', color: '#888', fontStyle: 'italic', padding: '0.5rem', textAlign: 'center', background: '#ede9e0' }}>Image coming soon</span>
                }
              </span>
              <span>{print.title}</span>
              {print.series && <span style={{ fontSize: '0.65rem', color: 'var(--accent)', display: 'block' }}>{print.series}</span>}
            </button>
          ))}
        </div>
      )}

      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label="Woodblock slideshow"
        onClose={() => setActiveIndex(null)}
        onKeyDown={event => {
          if (slides.length < 2) return
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            moveSlide(event.key === 'ArrowLeft' ? -1 : 1)
          }
        }}
      >
        <button type="button" className={styles.close} onClick={() => dialog.current?.close()}>Close</button>
        {activePrint?.src && (
          <>
            <figure>
              <div className={styles.slideImage}>
                <Image
                  src={activePrint.src}
                  alt={activePrint.title + ' by Leon Loughridge'}
                  fill
                  loading="eager"
                  sizes="(max-width: 600px) 90vw, 850px"
                />
              </div>
              <figcaption aria-live="polite">
                <cite>{activePrint.title}</cite>
                <span>{[
                  'Woodblock',
                  activePrint.year,
                  activePrint.dimensions,
                  activePrint.editionSize && `Edition of ${activePrint.editionSize}`,
                  activePrint.technique,
                  activePrint.series,
                ].filter(Boolean).join(' · ')}</span>
                {activePrint.note && <span>{activePrint.note}</span>}
              </figcaption>
            </figure>
            {slides.length > 1 && (
              <div className={styles.controls}>
                <button type="button" onClick={() => moveSlide(-1)}>Previous</button>
                <span aria-live="polite">{Number(activeIndex) + 1} of {slides.length}</span>
                <button type="button" onClick={() => moveSlide(1)}>Next</button>
              </div>
            )}
          </>
        )}
      </dialog>

      <hr className="dc-rule" />
      <SectionHeading className={styles.sectionTitle}>Studio Editions</SectionHeading>
      <div className="art-grid">
        {studioEditions.map(({ title, dims, edition, price, status, img }) => (
          <div key={img} className="art-card">
            <Image src={img} alt={title + ' by Leon Loughridge'} width={300} height={220} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <h4>{title}</h4>
            <p className="dims">{dims} | {edition}</p>
            {status === 'Available' && price
              ? <><p className="price">${price}</p><button className="buy-btn" type="button">Add to Cart</button></>
              : <p className="sold-out">{status}</p>}
          </div>
        ))}
      </div>

      <hr className="dc-rule" />
      <SectionHeading className={styles.sectionTitle}>Vintage Prints</SectionHeading>
      <div className="art-grid">
        {vintagePrints.map(({ title, img }) => (
          <div key={img} className="art-card">
            <Image src={img} alt={title} width={300} height={220} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <h4>{title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
