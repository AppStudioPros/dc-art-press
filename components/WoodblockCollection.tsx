'use client'

import { useId, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './WoodblockCollection.module.css'

type ArchivePrint = {
  title: string
  src: string
  year?: number
  dimensions?: string
  selected?: boolean
}

// Assign years when Leon supplies his selections for the archive.
const archive: ArchivePrint[] = [
  { title: 'Acoma Pueblo', src: '/images/eiteljorg-acoma-pueblo.jpg', selected: true },
  { title: 'Snowy Plateau', src: '/images/eiteljorg-snowy-plateau.jpg', selected: true },
  { title: 'Freezing Over', src: '/images/eiteljorg-freezing-over.jpg', selected: true },
]
const years = Array.from({ length: 12 }, (_, index) => 2025 - index)

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
  const activePrint = activeIndex === null ? undefined : prints[activeIndex]
  const title = year ? `Woodblocks from ${year}` : 'Selected Woodblocks'
  const Heading = pageHeading ? 'h1' : 'h2'
  const SectionHeading = pageHeading ? 'h2' : 'h3'

  function moveSlide(direction: number) {
    setActiveIndex(index => index === null ? null : (index + direction + prints.length) % prints.length)
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

      <p role="status">
        {prints.length === 0 && `Prints for ${year} are coming soon.`}
      </p>
      {prints.length > 0 && (
        <div className={styles.grid}>
          {prints.map((print, index) => (
            <button
              key={print.src}
              className={styles.thumbnail}
              type="button"
              aria-label={`Enlarge ${print.title}`}
              aria-haspopup="dialog"
              onClick={() => {
                setActiveIndex(index)
                dialog.current?.showModal()
              }}
            >
              <span className={styles.thumbnailImage}>
                <Image
                  src={print.src}
                  alt=""
                  fill
                  sizes="(max-width: 600px) 45vw, (max-width: 1080px) 30vw, 340px"
                />
              </span>
              <span>{print.title}</span>
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
          if (prints.length < 2) return
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            moveSlide(event.key === 'ArrowLeft' ? -1 : 1)
          }
        }}
      >
        <button type="button" className={styles.close} onClick={() => dialog.current?.close()}>Close</button>
        {activePrint && (
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
                <span>{['Woodblock', activePrint.year, activePrint.dimensions].filter(Boolean).join(' · ')}</span>
              </figcaption>
            </figure>
            {prints.length > 1 && (
              <div className={styles.controls}>
                <button type="button" onClick={() => moveSlide(-1)}>Previous</button>
                <span aria-live="polite">{Number(activeIndex) + 1} of {prints.length}</span>
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
